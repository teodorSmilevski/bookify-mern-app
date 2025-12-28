import type { UserDTO } from "@shared/dtos/user.dto";

export type User = UserDTO;

export interface UserContextType {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}
