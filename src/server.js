require('dotenv').config();
const express = require('express');
const { connect } = require('./database');
const routesConfig = require('./routes.config');
const { expressConfig } = require('./express');

const app = express();
const PORT = process.env.PORT || 8080;

const NODE_ENV = process.env.NODE_ENV || 'development';

app.listen(PORT, () => {
  expressConfig(app);
  connect();
  routesConfig(app);
  console.log(
    `Server listenning on http://localhost:${PORT} in ${NODE_ENV} mode`
  );
});

module.exports = app;
