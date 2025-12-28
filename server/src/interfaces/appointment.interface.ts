import { Document } from "mongoose";

export interface IAppointment extends Document {
  name: string;
  phoneNumber: string;
  date: Date;
  time: string;
  createdAt: Date;
  updatedAt: Date;
}
