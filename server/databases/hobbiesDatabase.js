import mongoose from 'mongoose';

const connectToHobbiesDatabase = () => {
  const url = 'mongodb://user:pass@ds053295.mongolab.com:53295/toomastahveshobbies';
  try {
    const conn = mongoose.createConnection(url);
    conn.on('connected', () => {
      console.log('Connected to mongodb connectToHobbiesDatabase.');
    });
    return conn;
  } catch(e) {
    console.log('Error connecting mongodb connectToHobbiesDatabase. Check connection string.');
  }
};

export default connectToHobbiesDatabase;
