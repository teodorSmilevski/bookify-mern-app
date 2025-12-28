import { useMemo } from "react";
import { isWorkingDay, formatDate } from "../../utils/timeSlots";
import "./DatePicker.scss";
import type { DatePickerProps } from "./datePicker.interface";

const DatePicker = ({ label, selectedDate, onChange }: DatePickerProps) => {
  const availableDates = useMemo(() => {
    const dates: string[] = [];
    const today = new Date();
    let daysAdded = 0;
    const currentDate = new Date(today);

    while (daysAdded < 30) {
      if (isWorkingDay(currentDate)) {
        dates.push(formatDate(currentDate));
        daysAdded++;
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  }, []);

  const getDisplayDate = (dateStr: string) => {
    const date = new Date(dateStr + "T00:00:00");
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="date-picker">
      <label className="date-picker__label">{label}</label>
      <div className="date-picker__grid">
        {availableDates.map((date) => (
          <button
            key={date}
            type="button"
            className={`date-picker__option ${
              selectedDate === date ? "date-picker__option--selected" : ""
            }`}
            onClick={() => onChange(date)}
          >
            {getDisplayDate(date)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DatePicker;
