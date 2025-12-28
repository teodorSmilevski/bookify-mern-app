import type { ReactNode } from "react";

export interface AdminContextType {
  isAuthenticated: boolean;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

export interface AdminProviderProps {
  children: ReactNode;
}
