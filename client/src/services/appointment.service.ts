import api from "../config/api";

export interface Appointment {
  _id?: string;
  name: string;
  phoneNumber: string;
  date: string;
  time: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
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

export const appointmentService = {
  createAppointment: async (
    data: Omit<Appointment, "_id" | "createdAt" | "updatedAt" | "__v">
  ) => {
    const response = await api.post("/appointments", data);
    return response.data;
  },

  getAllAppointments: async (): Promise<GetAppointmentsResponse> => {
    const response = await api.get("/appointments");
    return response.data;
  },

  getWeeklyAppointments: async (): Promise<GetWeeklyAppointmentsResponse> => {
    const response = await api.get(`/appointments/weekly`);
    return response.data;
  },

  deleteAppointment: async (id: string) => {
    const response = await api.delete(`/appointments/${id}`);
    return response.data;
  },
};
