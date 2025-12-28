import { useState } from "react";
import AdminContext from "./AdminContext";
import type { AdminProviderProps } from "./admin.interface";

const ADMIN_TOKEN_KEY = "admin_token";

const AdminProvider = ({ children }: AdminProviderProps) => {
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem(ADMIN_TOKEN_KEY);
  });

  const login = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem(ADMIN_TOKEN_KEY, newToken);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem(ADMIN_TOKEN_KEY);
  };

  const value = {
    isAuthenticated: !!token,
    token,
    login,
    logout,
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};

export default AdminProvider;
