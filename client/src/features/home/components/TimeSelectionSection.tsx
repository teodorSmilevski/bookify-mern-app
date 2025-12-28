import TimePicker from "../../../components/TimePicker/TimePicker";
import type { TimeSelectionSectionProps } from "../interfaces/timeSelection.interface";

const TimeSelectionSection = ({
  selectedDate,
  selectedTime,
  bookedSlots,
  onTimeChange,
}: TimeSelectionSectionProps) => {
  if (!selectedDate) return null;

  return (
    <div className="home-page__section">
      <h2 className="home-page__section-title">Select Time</h2>
      <TimePicker
        label="Available Time Slots (10:00 - 18:00)"
        selectedTime={selectedTime}
        onChange={onTimeChange}
        bookedSlots={bookedSlots}
      />
    </div>
  );
};

export default TimeSelectionSection;
