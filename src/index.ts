import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import { MONGO_URI } from './config';
import { AdminRoute, VendorRoute } from './routes';
import path from 'path'
//

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/images', express.static(path.join(__dirname, 'images')))

app.use('/admin', AdminRoute);
app.use('/vendor', VendorRoute);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('DB connected');
  })
  .catch((err) => console.log('error' + err));

app.listen(8000, () => {
  console.log('App is listening to the port 8000');
});
