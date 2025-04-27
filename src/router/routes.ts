import { Router } from "express";
import activitiesRoutes from "./activities.routes";
import usersRoutes from "./users.routes";

const router = Router();

// Definindo as rotas para users e activities
router.use("/users", usersRoutes); 
router.use("/activities", activitiesRoutes);

export default router;