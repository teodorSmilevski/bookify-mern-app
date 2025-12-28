// Working hours configuration
export const WORKING_HOURS = {
  DAYS: [1, 2, 3, 4, 5, 6] as const, // Monday to Saturday
  START_HOUR: 10,
  END_HOUR: 18,
  SLOT_DURATION_MINUTES: 30,
} as const;

// Time slot type - HH:MM format
export type TimeSlot = string;

// Date format type - YYYY-MM-DD format
export type DateString = string;
