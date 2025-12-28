import Button from "../../../components/Button/Button";
import type { AppointmentsListProps } from "../interfaces/appointmentList.interface";
import "./AppointmentsList.scss";

const AppointmentsList = ({
  appointments,
  onDelete,
}: AppointmentsListProps) => {
  if (appointments.length === 0) {
    return (
      <div className="appointments-list__empty">
        <p>No appointments found</p>
      </div>
    );
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + "T00:00:00");
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="appointments-list">
      <div className="appointments-list__header">
        <div className="appointments-list__header-cell">Date</div>
        <div className="appointments-list__header-cell">Time</div>
        <div className="appointments-list__header-cell">Name</div>
        <div className="appointments-list__header-cell">Phone</div>
        <div className="appointments-list__header-cell">Actions</div>
      </div>

      {appointments.map((appointment) => (
        <div key={appointment._id} className="appointments-list__row">
          <div className="appointments-list__cell">
            {formatDate(appointment.date)}
          </div>
          <div className="appointments-list__cell">{appointment.time}</div>
          <div className="appointments-list__cell">{appointment.name}</div>
          <div className="appointments-list__cell">
            {appointment.phoneNumber}
          </div>
          <div className="appointments-list__cell appointments-list__cell--actions">
            <Button onClick={() => onDelete(appointment._id)}>Delete</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentsList;
