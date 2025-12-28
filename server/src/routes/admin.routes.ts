import { Router } from "express";
import {
  adminLogin,
  getTodaysAppointments,
  getUpcomingAppointments,
} from "../controllers/admin.controller";

const router = Router();

router.post("/login", adminLogin);
router.get("/appointments/today", getTodaysAppointments);
router.get("/appointments/upcoming", getUpcomingAppointments);

export default router;
