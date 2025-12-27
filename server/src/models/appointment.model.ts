import mongoose, { Schema } from "mongoose";
import { IAppointment } from "../interfaces/appointment.interface";

const appointmentSchema = new Schema<IAppointment>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    date: {
      type: Date,
      required: [true, "Date is required"],
    },
    time: {
      type: String,
      required: [true, "Time is required"],
    },
  },
  {
    timestamps: true,
  }
);

appointmentSchema.index({ date: 1, time: 1 }, { unique: true });

export const Appointment = mongoose.model<IAppointment>(
  "Appointment",
  appointmentSchema
);
