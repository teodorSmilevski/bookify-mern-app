import { useState, useEffect } from "react";
import { useUser } from "../../../context/UserContext";
import { appointmentService } from "../../../services/appointment.service";

export const useBookingForm = () => {
  const { user, setUser } = useUser();

  const [name, setName] = useState(user?.name || "");
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || "+389");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (selectedDate) {
      fetchBookedSlots(selectedDate);
    }
  }, [selectedDate]);

  const fetchBookedSlots = async (date: string) => {
    try {
      const { data: appointments } =
        await appointmentService.getWeeklyAppointments();
      const slotsForDate = appointments
        .filter((apt) => apt.date === date)
        .map((apt) => apt.time);
      setBookedSlots(slotsForDate);
    } catch (err) {
      console.error("Error fetching booked slots:", err);
      setBookedSlots([]);
    }
  };

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    setSelectedTime("");
  };

  const validateForm = (): string | null => {
    if (!name || phoneNumber === "+389 ") {
      return "Please enter your name and phone number";
    }
    if (!selectedDate) {
      return "Please select a date";
    }
    if (!selectedTime) {
      return "Please select a time";
    }
    return null;
  };

  const submitBooking = async () => {
    setError("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return false;
    }

    setLoading(true);

    try {
      setUser({ name, phoneNumber });

      await appointmentService.createAppointment({
        name,
        phoneNumber,
        date: selectedDate,
        time: selectedTime,
      });

      alert("Appointment booked successfully!");

      setSelectedDate("");
      setSelectedTime("");
      setBookedSlots([]);

      return true;
    } catch (err) {
      console.error("Error booking appointment:", err);
      const errorMessage =
        err &&
        typeof err === "object" &&
        "response" in err &&
        err.response &&
        typeof err.response === "object" &&
        "data" in err.response &&
        err.response.data &&
        typeof err.response.data === "object" &&
        "message" in err.response.data
          ? String(err.response.data.message)
          : null;
      setError(errorMessage || "Failed to book appointment. Please try again.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    name,
    phoneNumber,
    selectedDate,
    selectedTime,
    bookedSlots,
    loading,
    error,
    setName,
    setPhoneNumber,
    handleDateChange,
    setSelectedTime,
    submitBooking,
  };
};
