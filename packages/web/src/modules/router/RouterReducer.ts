import * as R from 'ramda';
import { connectRouter } from 'connected-react-router';

export const STATE_KEY = 'router';

export const getLocation = R.path([STATE_KEY, 'location']);

export default connectRouter;
