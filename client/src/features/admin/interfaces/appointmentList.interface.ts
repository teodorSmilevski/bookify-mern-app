import type { Appointment } from "@shared/index";

export interface AppointmentsListProps {
  appointments: Appointment[];
  onDelete: (id: string) => void;
}
