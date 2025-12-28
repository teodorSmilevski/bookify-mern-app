import { createContext } from "react";
import type { UserContextType } from "./user.interface";

export const UserContext = createContext<UserContextType | undefined>(undefined);
