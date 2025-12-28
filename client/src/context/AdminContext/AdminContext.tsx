import { createContext } from "react";
import type { AdminContextType } from "./admin.interface";

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export default AdminContext;
