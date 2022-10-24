require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { connect } = require('./database');
const routesConfig = require('./routes');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
connect();
routesConfig(app);

app.listen(port, () => {
  console.log(`Server listenning on http://localhost:${port}`);
});
