import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import db from './utils/db.js';

//import all routes
import userRoutes from './routes/user.routes.js';

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.BASEURL,
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World 1');
});

//connect to db
db();

//user routes
app.use('/api/v1/user', userRoutes);

app.listen(PORT, () => {
  console.log("Server is running at port", PORT);
});
