import DatePicker from "../../../components/DatePicker/DatePicker";
import type { DateSelectionSectionProps } from "../interfaces/dateSelection.interface";

const DateSelectionSection = ({
  selectedDate,
  onDateChange,
}: DateSelectionSectionProps) => {
  return (
    <div className="home-page__section">
      <h2 className="home-page__section-title">Select Date</h2>
      <DatePicker
        label="Available Dates (Mon-Sat)"
        selectedDate={selectedDate}
        onChange={onDateChange}
      />
    </div>
  );
};

export default DateSelectionSection;
