"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserController = createUserController;
exports.getAllUsersController = getAllUsersController;
exports.getUserByIdController = getUserByIdController;
var userService_1 = require("../services/userService");
function createUserController(req, res) {
    var name = req.body.name;
    if (!name) {
        res.status(409).json({ error: "Name is required" });
        return;
    }
    var user = (0, userService_1.createUser)(name);
    res.status(201).json(user);
}
function getAllUsersController(req, res) {
    var list = (0, userService_1.getAllUsers)();
    res.status(200).json(list);
}
function getUserByIdController(req, res) {
    var id = parseInt(req.params.id);
    var user = (0, userService_1.getUserById)(id);
    if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
    }
    res.json(user);
}
