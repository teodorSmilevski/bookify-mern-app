import { generateTimeSlots, isSlotAvailable } from "../../utils/timeSlots";
import type { TimePickerProps } from "./timePicker.interface";
import "./TimePicker.scss";

const TimePicker = ({
  label,
  selectedTime,
  onChange,
  bookedSlots,
  disabled = false,
}: TimePickerProps) => {
  const timeSlots = generateTimeSlots();

  return (
    <div className="time-picker">
      <label className="time-picker__label">{label}</label>
      <div className="time-picker__grid">
        {timeSlots.map((slot) => {
          const available = isSlotAvailable(slot, bookedSlots);
          return (
            <button
              key={slot}
              type="button"
              className={`time-picker__option ${
                selectedTime === slot ? "time-picker__option--selected" : ""
              } ${!available ? "time-picker__option--booked" : ""}`}
              onClick={() => available && onChange(slot)}
              disabled={disabled || !available}
            >
              {slot}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TimePicker;
