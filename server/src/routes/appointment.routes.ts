import { Router } from "express";
import {
  createAppointment,
  getAllAppointments,
  getWeeklyAppointments,
  deleteAppointment,
} from "../controllers/appointment.controller";

const router = Router();

router.post("/", createAppointment);

router.get("/", getAllAppointments);

router.get("/weekly", getWeeklyAppointments);

router.delete("/:id", deleteAppointment);

export default router;
