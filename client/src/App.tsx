import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { AdminProvider } from "./context/AdminContext";
import Layout from "./components/Layout/Layout";
import HomePage from "./features/home/HomePage";
import LoginPage from "./features/auth/LoginPage";
import AdminLoginPage from "./features/admin-login/AdminLoginPage";
import AdminDashboard from "./features/admin/AdminDashboard";
import NotFoundPage from "./features/error/NotFoundPage";

function App() {
  return (
    <UserProvider>
      <AdminProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="admin" element={<AdminLoginPage />} />
              <Route path="admin/dashboard" element={<AdminDashboard />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AdminProvider>
    </UserProvider>
  );
}

export default App;
