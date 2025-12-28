export interface TimeSelectionSectionProps {
  selectedDate: string;
  selectedTime: string;
  bookedSlots: string[];
  onTimeChange: (time: string) => void;
}
