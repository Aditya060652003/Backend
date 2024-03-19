import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true],
    minlength: ["3", "First Name must contain at least 3 characters"],
    maxlength: ["20", "First Name must contain at most 20 characters"],
  },
  lastname: {
    type: String,
    required: [true],
    minlength: ["3", "Last Name must contain at least 3 characters"],
    maxlength: ["20", "Last Name must contain at most 20 characters"],
  },
  email: {
    type: String,
    required: [true],
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  phone: {
    type: String,
    required: [true],
    minlength: ["11", "Phone number must contain at least 11 characters"],
    maxlength: ["11", "Phone number must contain at most 11 characters"],
  },
  date: {
    type: String,
    required: [true],
  },
  time: {
    type: String,
    required: [true],
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
