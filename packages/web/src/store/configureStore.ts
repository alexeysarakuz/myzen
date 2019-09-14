import axios from 'axios';
// @ts-ignore
import axiosMiddleware from 'redux-axios-middleware';
import axiosMiddlewareOptions from './middlewares/axiosMiddlewareOptions';
import AppConfig from 'config/AppConfig';
import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory, createMemoryHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { routerMiddleware } from 'connected-react-router';

import loggerMiddleware from './middlewares/loggerMiddleware';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    __PRELOADED_STATE__: any;
  }
}

export default () => {
  const history = isServer
    ? createMemoryHistory({ initialEntries: ['/'] })
    : createBrowserHistory();

  const initialState = !isServer ? window.__PRELOADED_STATE__ || {} : {};

  const sagaMiddleware = createSagaMiddleware();

  const axiosClient = axios.create({
    baseURL: AppConfig.apiUrl,
    responseType: 'json',
  });

  const middlewares = [
    routerMiddleware(history),
    thunk,
    axiosMiddleware(axiosClient, axiosMiddlewareOptions),
    sagaMiddleware,
  ];

  if (!isServer && typeof jest === 'undefined') {
    middlewares.push(loggerMiddleware);
  }

  const composeEnhancers = isServer
    ? compose
    : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require('./rootReducer').default(history);
      store.replaceReducer(nextRootReducer);
    });
  }

  return { history, persistor, store };
};
