import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../../context/AdminContext";
import { adminService } from "../../services/admin.service";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./AdminLoginPage.scss";

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAdmin();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!password) {
      setError("Please enter the admin password");
      return;
    }

    setLoading(true);

    try {
      const response = await adminService.login(password);
      login(response.token);
      navigate("/admin/dashboard");
    } catch (err) {
      console.error("Admin login error:", err);
      setError("Invalid password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-page__container">
        <h1 className="admin-login-page__title">Admin Access</h1>
        <p className="admin-login-page__description">
          Enter password to access the admin panel
        </p>

        <form className="admin-login-page__form" onSubmit={handleSubmit}>
          <Input
            label="Admin Password"
            id="admin-password"
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <div className="admin-login-page__error">{error}</div>}

          <Button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
