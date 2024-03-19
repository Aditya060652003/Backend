import express from "express";
import { sendreservation } from "../controllers/reservationcontrol.js";
const router = express.Router();

router.post("/send", sendreservation);


export {router};