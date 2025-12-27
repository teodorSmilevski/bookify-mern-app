import mongoose, { Document, Schema } from "mongoose";

export interface IAppointment extends Document {
  id: string;
  name: string;
  phoneNumber: string;
  date: Date;
  time: string;
  createdAt: Date;
}

const appointmentSchema = new Schema<IAppointment>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
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
