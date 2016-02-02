import mongoose from 'mongoose';

const connectToPetsDatabase = () => {
  const url = 'mongodb://user:pass@ds055945.mongolab.com:55945/toomastahvespets';
  try {
    const conn = mongoose.createConnection(url);
    conn.on('connected', () => {
      console.log('Connected to mongodb connectToPetsDatabase.');
    });
    return conn;
  } catch(e) {
    console.log('Error connecting mongodb connectToPetsDatabase. Check connection string.');
  }
};

export default connectToPetsDatabase;
