import { Router } from "express";
import {
  createUserController,
  getAllUsersController,
  getUserByIdController
} from "./controllers/userController";
import {
  createActivityController,
  getAllActivitiesController
} from "./controllers/activityController";

const router = Router();

// Users
router.post("/users", createUserController);
router.get("/users", getAllUsersController);
router.get("/users/:id", getUserByIdController);

// Activities
router.post("/activities", createActivityController);
router.get("/activities", getAllActivitiesController);

export default router;