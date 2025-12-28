import { type FormEvent } from "react";
import Button from "../../components/Button/Button";
import {
  UserInfoSection,
  DateSelectionSection,
  TimeSelectionSection,
  LoginPrompt,
} from "./components";
import { useBookingForm } from "./hooks/useBookingForm";
import "./HomePage.scss";

const HomePage = () => {
  const {
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
  } = useBookingForm();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await submitBooking();
  };

  return (
    <div className="home-page">
      <div className="home-page__container">
        <h1 className="home-page__title">Book Your Appointment</h1>
        <p className="home-page__description">
          Choose your preferred date and time
        </p>

        {!user && <LoginPrompt />}

        <form className="home-page__form" onSubmit={handleSubmit}>
          <UserInfoSection
            name={name}
            phoneNumber={phoneNumber}
            onNameChange={setName}
            onPhoneChange={setPhoneNumber}
          />

          <DateSelectionSection
            selectedDate={selectedDate}
            onDateChange={handleDateChange}
          />

          <TimeSelectionSection
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            bookedSlots={bookedSlots}
            onTimeChange={setSelectedTime}
          />

          {error && <div className="home-page__error">{error}</div>}

          <Button type="submit" disabled={loading}>
            {loading ? "Booking..." : "Book Appointment"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
