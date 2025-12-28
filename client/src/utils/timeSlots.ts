export const WORKING_DAYS = [1, 2, 3, 4, 5, 6];
export const START_HOUR = 10;
export const END_HOUR = 18;
export const SLOT_DURATION = 30;

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
  return WORKING_DAYS.includes(day);
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
