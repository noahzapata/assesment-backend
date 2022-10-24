const mongoose = require('mongoose');

let connection;

const connect = async () => {
  if (connection) return;

  const mongoUri = process.env.MONGO_URI;

  connection = mongoose.connection;

  connection.once('open', () => {
    console.log('Connection successfully');
  });

  connection.on('error', (error) => {
    console.log('Something went wrong ', error);
  });

  await mongoose.connect(mongoUri);
};

module.exports = { connect };
