import { Router } from "express";
import appointmentRoutes from "./appointment.routes";
import adminRoutes from "./admin.routes";

const router = Router();

router.use("/appointments", appointmentRoutes);
router.use("/admin", adminRoutes);

export default router;
