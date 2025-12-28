import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../../context/AdminContext";
import { adminService } from "../../services/admin.service";
import type { Appointment } from "@shared/dtos/appointment.dto";
import AppointmentsList from "./components/AppointmentsList";
import Button from "../../components/Button/Button";
import "./AdminDashboard.scss";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { logout, isAuthenticated } = useAdmin();
  const [activeTab, setActiveTab] = useState<"today" | "weekly" | "upcoming">(
    "today"
  );
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/admin");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    fetchAppointments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  const fetchAppointments = async () => {
    setLoading(true);
    setError("");

    try {
      let response;
      switch (activeTab) {
        case "today":
          response = await adminService.getTodaysAppointments();
          break;
        case "weekly":
          response = await adminService.getWeeklyAppointments();
          break;
        case "upcoming":
          response = await adminService.getUpcomingAppointments();
          break;
      }
      setAppointments(response.data);
    } catch (err) {
      console.error("Error fetching appointments:", err);
      setError("Failed to load appointments");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this appointment?")) {
      return;
    }

    try {
      await adminService.deleteAppointment(id);
      fetchAppointments();
    } catch (err) {
      console.error("Error deleting appointment:", err);
      alert("Failed to delete appointment");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/admin");
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-dashboard__container">
        <div className="admin-dashboard__header">
          <h1 className="admin-dashboard__title">Admin Dashboard</h1>
          <Button onClick={handleLogout}>Logout</Button>
        </div>

        <div className="admin-dashboard__tabs">
          <button
            className={`admin-dashboard__tab ${
              activeTab === "today" ? "admin-dashboard__tab--active" : ""
            }`}
            onClick={() => setActiveTab("today")}
          >
            Today
          </button>
          <button
            className={`admin-dashboard__tab ${
              activeTab === "weekly" ? "admin-dashboard__tab--active" : ""
            }`}
            onClick={() => setActiveTab("weekly")}
          >
            This Week
          </button>
          <button
            className={`admin-dashboard__tab ${
              activeTab === "upcoming" ? "admin-dashboard__tab--active" : ""
            }`}
            onClick={() => setActiveTab("upcoming")}
          >
            All Upcoming
          </button>
        </div>

        {error && <div className="admin-dashboard__error">{error}</div>}

        {loading ? (
          <div className="admin-dashboard__loading">Loading...</div>
        ) : (
          <AppointmentsList
            appointments={appointments}
            onDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
