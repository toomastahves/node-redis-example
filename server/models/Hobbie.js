import mongoose, { Schema } from 'mongoose';
import db from '../databases/hobbiesDatabase';

const Hobbie = new Schema({
  name: {
    type: String,
    required: true
  },
  activity: {
    type: String
  }
});

export default db().model('Hobbie', Hobbie);
