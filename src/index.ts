import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { MONGO_URI } from './config';
import { AdminRoute, VendorRoute } from './routes';

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/admin', AdminRoute);
app.use('/vendor', VendorRoute);

mongoose
  .connect(MONGO_URI)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log('error' + err));

app.listen(8000, () => {
  console.log('App is listening to the port 8000');
});
