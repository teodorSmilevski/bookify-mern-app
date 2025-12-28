import { Request, Response } from "express";
import { Appointment } from "../models/appointment.model";
import {
  AdminLoginRequest,
  AdminLoginResponse,
  AdminAuthErrorResponse,
} from "@shared/dtos/admin.dto";
import {
  GetAppointmentsResponse,
  ErrorResponse,
} from "@shared/dtos/appointment.dto";

export const adminLogin = async (
  req: Request<{}, {}, AdminLoginRequest>,
  res: Response<AdminLoginResponse | AdminAuthErrorResponse>
): Promise<void> => {
  try {
    const { password } = req.body;

    if (!password) {
      res.status(400).json({
        error: "Missing password",
        message: "Password is required",
      });
      return;
    }

    if (password !== process.env.ADMIN_PASSWORD) {
      res.status(401).json({
        error: "Invalid password",
        message: "Incorrect admin password",
      });
      return;
    }

    // Simple token generation for demonstration purposes
    const token = Buffer.from(
      `admin:${Date.now()}:${process.env.ADMIN_PASSWORD}`
    ).toString("base64");

    res.status(200).json({
      message: "Admin login successful",
      token,
    });
  } catch (error) {
    console.error("Error during admin login:", error);
    res.status(500).json({
      error: "Login failed",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const getTodaysAppointments = async (
  _req: Request,
  res: Response<GetAppointmentsResponse | ErrorResponse>
): Promise<void> => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const appointments = await Appointment.find({
      date: {
        $gte: today,
        $lt: tomorrow,
      },
    }).sort({ time: 1 });

    res.status(200).json({
      message: "Today's appointments retrieved successfully",
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
    console.error("Error fetching today's appointments:", error);
    res.status(500).json({
      error: "Failed to fetch today's appointments",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const getUpcomingAppointments = async (
  _req: Request,
  res: Response<GetAppointmentsResponse | ErrorResponse>
): Promise<void> => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const appointments = await Appointment.find({
      date: {
        $gte: today,
      },
    }).sort({ date: 1, time: 1 });

    res.status(200).json({
      message: "Upcoming appointments retrieved successfully",
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
    console.error("Error fetching upcoming appointments:", error);
    res.status(500).json({
      error: "Failed to fetch upcoming appointments",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
