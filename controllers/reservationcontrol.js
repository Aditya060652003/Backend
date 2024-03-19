import ErrorHandler from '../Errors/error.js';
import { Reservation } from '../models/reservationSchema.js';

export const sendreservation = async (req, res, next) => {
   
    const {firstname, lastname, email, phone, date, time} = req.body;
    console.log(req.body.firstname);
    if(!firstname || !lastname || !email || !phone || !date || !time){
        return next(new ErrorHandler("Please fill all fields", 400));
    }
    try{
        await Reservation.create({firstname, lastname, email, phone, date, time});
        res.status(200).json({
            success : true,
            message : "Reservation sent"
        });
    }
    catch(error){
        if(error.name === "ValidationError"){
            const validationError = Object.values(error.errors).map((err)=> err.message);
            return next(new ErrorHandler(validationError.join(","), 400));
            
        }
    }
}