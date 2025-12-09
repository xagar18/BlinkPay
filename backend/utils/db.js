import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const db = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log('connected to MongoDB');
    })
    .catch(err => {
      console.log('error Connecting to MongoDB', err);
    });
};

export default db;
