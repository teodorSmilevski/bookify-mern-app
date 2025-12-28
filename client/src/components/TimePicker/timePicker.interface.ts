export interface TimePickerProps {
  label: string;
  selectedTime: string;
  onChange: (time: string) => void;
  bookedSlots: string[];
  disabled?: boolean;
}
