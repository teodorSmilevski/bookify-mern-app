import { Request, Response } from "express";
import { Appointment } from "../models/appointment.model";
import {
  CreateAppointmentRequest,
  CreateAppointmentResponse,
  GetAppointmentsResponse,
  GetWeeklyAppointmentsResponse,
  DeleteAppointmentResponse,
  ErrorResponse,
} from "@shared/dtos/appointment.dto";
import { validateName, validatePhoneNumber } from "@shared/utils/validation";

export const createAppointment = async (
  req: Request<{}, {}, CreateAppointmentRequest>,
  res: Response<CreateAppointmentResponse | ErrorResponse>
): Promise<void> => {
  try {
    const { name, phoneNumber, date, time } = req.body;

    if (!name || !phoneNumber || !date || !time) {
      res.status(400).json({
        error: "Missing required fields",
        message: "Name, phone number, date, and time are required",
      });
      return;
    }

    const nameValidation = validateName(name);
    if (!nameValidation.isValid) {
      res.status(400).json({
        error: "Invalid name",
        message: nameValidation.error || "Name validation failed",
      });
      return;
    }

    const phoneValidation = validatePhoneNumber(phoneNumber);
    if (!phoneValidation.isValid) {
      res.status(400).json({
        error: "Invalid phone number",
        message: phoneValidation.error || "Phone number validation failed",
      });
      return;
    }

    const existingAppointment = await Appointment.findOne({ date, time });

    if (existingAppointment) {
      res.status(409).json({
        error: "Appointment conflict",
        message: "An appointment already exists at this date and time",
      });
      return;
    }

    const appointment = await Appointment.create({
      name,
      phoneNumber,
      date,
      time,
    });

    res.status(201).json({
      message: "Appointment created successfully",
      data: {
        _id: appointment._id.toString(),
        name: appointment.name,
        phoneNumber: appointment.phoneNumber,
        date: appointment.date.toISOString().split("T")[0],
        time: appointment.time,
        createdAt: appointment.createdAt.toISOString(),
        updatedAt: appointment.updatedAt.toISOString(),
      },
    });
  } catch (error) {
    console.error("Error creating appointment:", error);
    res.status(500).json({
      error: "Failed to create appointment",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const getAllAppointments = async (
  _req: Request,
  res: Response<GetAppointmentsResponse | ErrorResponse>
): Promise<void> => {
  try {
    const appointments = await Appointment.find().sort({ date: 1, time: 1 });

    res.status(200).json({
      message: "Appointments retrieved successfully",
      count: appointments.length,
      data: appointments.map((apt) => ({
        _id: apt._id.toString(),
        name: apt.name,
        phoneNumber: apt.phoneNumber,
        date: apt.date.toISOString().split("T")[0],
        time: apt.time,
        createdAt: apt.createdAt.toISOString(),
        updatedAt: apt.updatedAt.toISOString(),
      })),
    });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).json({
      error: "Failed to fetch appointments",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const getWeeklyAppointments = async (
  _req: Request,
  res: Response<GetWeeklyAppointmentsResponse | ErrorResponse>
): Promise<void> => {
  try {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    const startOfWeek = new Date(now);

    startOfWeek.setDate(now.getDate() + diffToMonday);
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    const appointments = await Appointment.find({
      date: {
        $gte: startOfWeek,
        $lte: endOfWeek,
      },
    }).sort({ date: 1, time: 1 });

    res.status(200).json({
      message: "Weekly appointments retrieved successfully",
      week: {
        start: startOfWeek.toISOString(),
        end: endOfWeek.toISOString(),
      },
      count: appointments.length,
      data: appointments.map((apt) => ({
        _id: apt._id.toString(),
        name: apt.name,
        phoneNumber: apt.phoneNumber,
        date: apt.date.toISOString().split("T")[0],
        time: apt.time,
        createdAt: apt.createdAt.toISOString(),
        updatedAt: apt.updatedAt.toISOString(),
      })),
    });
  } catch (error) {
    console.error("Error fetching weekly appointments:", error);
    res.status(500).json({
      error: "Failed to fetch weekly appointments",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const deleteAppointment = async (
  req: Request,
  res: Response<DeleteAppointmentResponse | ErrorResponse>
): Promise<void> => {
  try {
    const { id } = req.params;

    const appointment = await Appointment.findByIdAndDelete(id);

    if (!appointment) {
      res.status(404).json({
        error: "Appointment not found",
        message: `No appointment found with id: ${id}`,
      });
      return;
    }

    res.status(200).json({
      message: "Appointment deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting appointment:", error);
    res.status(500).json({
      error: "Failed to delete appointment",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
