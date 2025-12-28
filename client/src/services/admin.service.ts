import api from "../config/api";
import type {
  AdminLoginRequest,
  AdminLoginResponse,
} from "@shared/dtos/admin.dto";
import type {
  GetAppointmentsResponse,
  GetWeeklyAppointmentsResponse,
} from "@shared/dtos/appointment.dto";

export const adminService = {
  login: async (password: string): Promise<AdminLoginResponse> => {
    const response = await api.post<AdminLoginResponse>("/admin/login", {
      password,
    } as AdminLoginRequest);
    return response.data;
  },

  getTodaysAppointments: async (): Promise<GetAppointmentsResponse> => {
    const response = await api.get<GetAppointmentsResponse>(
      "/admin/appointments/today"
    );
    return response.data;
  },

  getWeeklyAppointments: async (): Promise<GetWeeklyAppointmentsResponse> => {
    const response = await api.get<GetWeeklyAppointmentsResponse>(
      "/appointments/weekly"
    );
    return response.data;
  },

  getUpcomingAppointments: async (): Promise<GetAppointmentsResponse> => {
    const response = await api.get<GetAppointmentsResponse>(
      "/admin/appointments/upcoming"
    );
    return response.data;
  },

  deleteAppointment: async (id: string): Promise<void> => {
    await api.delete(`/appointments/${id}`);
  },
};
