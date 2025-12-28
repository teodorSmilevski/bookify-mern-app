import api from "../config/api";
import type {
  Appointment,
  CreateAppointmentRequest,
  CreateAppointmentResponse,
  GetAppointmentsResponse,
  GetWeeklyAppointmentsResponse,
  DeleteAppointmentResponse,
} from "@shared/dtos/appointment.dto";

export const appointmentService = {
  createAppointment: async (
    data: CreateAppointmentRequest
  ): Promise<CreateAppointmentResponse> => {
    const response = await api.post<CreateAppointmentResponse>(
      "/appointments",
      data
    );
    return response.data;
  },

  getAllAppointments: async (): Promise<GetAppointmentsResponse> => {
    const response = await api.get<GetAppointmentsResponse>("/appointments");
    return response.data;
  },

  getWeeklyAppointments: async (): Promise<GetWeeklyAppointmentsResponse> => {
    const response = await api.get<GetWeeklyAppointmentsResponse>(
      `/appointments/weekly`
    );
    return response.data;
  },

  deleteAppointment: async (id: string): Promise<DeleteAppointmentResponse> => {
    const response = await api.delete<DeleteAppointmentResponse>(
      `/appointments/${id}`
    );
    return response.data;
  },
};

// Re-export types for convenience
export type { Appointment };
