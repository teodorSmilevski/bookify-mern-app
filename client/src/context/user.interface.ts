export interface User {
  name: string;
  phoneNumber: string;
}

export interface UserContextType {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}
