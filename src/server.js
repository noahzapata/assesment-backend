require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { connect } = require('./database');
const routesConfig = require('./routes.config');

const app = express();
const port = 8080;
connect();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
routesConfig(app);

app.listen(port, () => {
  console.log(`Server listenning on http://localhost:${port}`);
});
