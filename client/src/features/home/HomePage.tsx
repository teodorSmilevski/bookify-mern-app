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
      <section className="home-page__hero">
        <div className="home-page__hero-content">
          <h1 className="home-page__hero-title">
            Book Your Appointment{" "}
            <span className="home-page__hero-highlight">In Seconds</span>
          </h1>
          <p className="home-page__hero-subtitle">
            Fast, easy, and convenient appointment booking
          </p>
        </div>
      </section>

      <section className="home-page__info-section">
        <div className="home-page__info-cards">
          <div className="home-page__info-card">
            <div className="home-page__info-icon">📅</div>
            <h3 className="home-page__info-title">Easy Booking</h3>
            <p className="home-page__info-text">
              Choose date & time in seconds
            </p>
          </div>
          <div className="home-page__info-card home-page__info-card--highlight">
            <div className="home-page__info-icon">⏰</div>
            <h3 className="home-page__info-title">Working Hours</h3>
            <p className="home-page__info-text">Mon - Sat: 10:00 - 18:00</p>
            <p className="home-page__info-text home-page__info-text--small">
              Closed on Sundays
            </p>
          </div>
          <div className="home-page__info-card">
            <div className="home-page__info-icon">✅</div>
            <h3 className="home-page__info-title">Instant Confirmation</h3>
            <p className="home-page__info-text">Get confirmed immediately</p>
          </div>
        </div>
      </section>

      <section className="home-page__booking">
        <div className="home-page__container">
          <h2 className="home-page__title">Book Your Appointment</h2>
          <p className="home-page__description">
            Select your preferred date and time
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
      </section>
    </div>
  );
};

export default HomePage;
