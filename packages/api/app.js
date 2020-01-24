const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

// All routes
const accountsRoutes = require('./routes/accounts.routes.js');
const freelancersInfoRoutes = require('./routes/freelancers.info.routes.js');

const app = express();

mongoose.connect(
  'mongodb+srv://myzen_host:' +
    process.env.DB_PW +
    '@cluster0-l8wcw.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
);

// Enable highlightnings in the console
app.use(morgan('dev'));

// Enable CORS
app.use(cors());

// Enable body parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/accounts', accountsRoutes);
app.use('/freelancers', freelancersInfoRoutes);

app.use((req, res, next) => {
  const error = new Error('Page was not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
