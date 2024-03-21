import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {dBconnection} from "./DATABASE/dBconnection.js";
import { errormiddleware } from './Errors/error.js';
import  {router as ReservationRouter} from './Routes/reservation.js';

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(cors({
    origin: 'http://localhost:3000',
    methods: [ 'POST'],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/reservation', ReservationRouter);
dBconnection();

app.use(errormiddleware);

export default app;