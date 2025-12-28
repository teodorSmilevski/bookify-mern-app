import { Document } from "mongoose";
import { AppointmentDTO } from "@shared/dtos/appointment.dto";

// MongoDB-specific interface extending the shared DTO
export interface IAppointment extends Document {
  name: string;
  phoneNumber: string;
  date: Date; // MongoDB uses Date objects
  time: string;
  createdAt: Date;
  updatedAt: Date;
}

// Helper to convert MongoDB document to DTO
export const toAppointmentDTO = (doc: IAppointment): AppointmentDTO => ({
  name: doc.name,
  phoneNumber: doc.phoneNumber,
  date: doc.date.toISOString().split("T")[0], // Convert Date to YYYY-MM-DD
  time: doc.time,
});
