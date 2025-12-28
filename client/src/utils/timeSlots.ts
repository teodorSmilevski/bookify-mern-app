import { WORKING_HOURS } from "@shared/constants/working-hours";

// Re-export for backwards compatibility
export const WORKING_DAYS: number[] = [...WORKING_HOURS.DAYS];
export const START_HOUR = WORKING_HOURS.START_HOUR;
export const END_HOUR = WORKING_HOURS.END_HOUR;
export const SLOT_DURATION = WORKING_HOURS.SLOT_DURATION_MINUTES;

export const generateTimeSlots = (): string[] => {
  const slots: string[] = [];

  for (let hour = START_HOUR; hour < END_HOUR; hour++) {
    slots.push(`${hour.toString().padStart(2, "0")}:00`);
    slots.push(`${hour.toString().padStart(2, "0")}:30`);
  }

  return slots;
};

export const isWorkingDay = (date: Date): boolean => {
  const day = date.getDay();
  return (WORKING_DAYS as readonly number[]).includes(day);
};

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const isSlotAvailable = (
  timeSlot: string,
  bookedSlots: string[]
): boolean => {
  return !bookedSlots.includes(timeSlot);
};
