require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { connect } = require('./database');

const port = 8080;
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
connect();

app.listen(port, () => {
  console.log(`Server listenning on http://localhost:${port}`);
});
