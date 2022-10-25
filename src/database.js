const mongoose = require('mongoose');

let connection;

const connect = async () => {
  if (connection) return;

  const mongoUri =
    process.env.MONGO_URI ||
    'mongodb+srv://APIroot:APIroot@cluster0.qvctdjf.mongodb.net/FAVS?retryWrites=true&w=majority';

  connection = mongoose.connection;

  connection.once('open', () => {
    console.log('Connection successfully');
  });

  connection.on('disconnected', () => {
    console.log('Disconnected successfull');
  });

  connection.on('error', (error) => {
    console.log('Something went wrong ', error);
  });

  await mongoose.connect(mongoUri);
};

async function disconnected() {
  if (!connection) return;

  await mongoose.disconnect();
}

async function cleanup() {
  for (const collection in connection.collections) {
    await connection.collections[collection].deleteMany({});
  }
}

module.exports = { connect, disconnected, cleanup };
