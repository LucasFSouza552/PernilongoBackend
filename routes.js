"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userController_1 = require("./controllers/userController");
var activityController_1 = require("./controllers/activityController");
var router = (0, express_1.Router)();
// Users
router.post("/users", userController_1.createUserController);
router.get("/users", userController_1.getAllUsersController);
router.get("/users/:id", userController_1.getUserByIdController);
// Activities
router.post("/activities", activityController_1.createActivityController);
router.get("/activities", activityController_1.getAllActivitiesController);
exports.default = router;
