import express from 'express';
import db from './connection';
import cors from 'cors';
import { router } from './routes/clientsRoutes';

const app = express();

app.use(cors());

app.use(express.json());

db();

app.use(function (_req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/clients', router);

app.listen(3001);
