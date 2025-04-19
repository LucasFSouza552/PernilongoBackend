import { Router } from "express";
import {
  createUserController,
  getAllUsersController,
<<<<<<< HEAD
  getUserByIdController
} from "../controllers/userController";
=======
  getUserByIdController,
  deleteUserByIdController
} from "../controllers/userController";

>>>>>>> 091ae7b8e9274db34c449c74592fd8fe6f9a553b
import {
  createActivityController,
  getAllActivitiesController
} from "../controllers/activityController";

const router = Router();

// Users
router.post("/users", createUserController);
router.get("/users", getAllUsersController);
router.get("/users/:id", getUserByIdController);
router.delete("/users/:id", deleteUserByIdController);

// Activities
router.post("/activities", createActivityController);
router.get("/activities", getAllActivitiesController);

export default router;