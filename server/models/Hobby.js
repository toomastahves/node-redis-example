import { Schema } from 'mongoose';
import db from '../databases/hobbiesDatabase';

const Hobby = new Schema({
  name: {
    type: String,
    required: true
  },
  activity: {
    type: String
  }
});

export default db().model('Hobby', Hobby);
