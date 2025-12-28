// Core Appointment DTO
export interface AppointmentDTO {
  name: string;
  phoneNumber: string;
  date: string;
  time: string;
}

// Appointment with ID and timestamps (what API returns)
export interface Appointment extends AppointmentDTO {
  _id: string;
  createdAt: string;
  updatedAt: string;
}

// Request DTOs
export interface CreateAppointmentRequest {
  name: string;
  phoneNumber: string;
  date: string;
  time: string;
}

// Response DTOs
export interface CreateAppointmentResponse {
  message: string;
  data: Appointment;
}

export interface GetAppointmentsResponse {
  message: string;
  count: number;
  data: Appointment[];
}

export interface GetWeeklyAppointmentsResponse {
  message: string;
  week: {
    start: string;
    end: string;
  };
  count: number;
  data: Appointment[];
}

export interface DeleteAppointmentResponse {
  message: string;
}

// Error Response DTO
export interface ErrorResponse {
  error: string;
  message: string;
}
