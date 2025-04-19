"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createActivityController = createActivityController;
exports.getAllActivitiesController = getAllActivitiesController;
var activityService_1 = require("../services/activityService");
function createActivityController(req, res) {
    var _a = req.body, userId = _a.userId, type = _a.type, distance = _a.distance, time = _a.time;
    if (!userId || !type || distance === undefined || time === undefined) {
        res.status(400).json({ error: "Missing fields in request body" });
        return;
    }
    try {
        var newAct = (0, activityService_1.createActivity)(userId, type, distance, time);
        res.status(201).json(newAct);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}
function getAllActivitiesController(req, res) {
    var list = (0, activityService_1.getAllActivities)();
    res.status(200).json(list);
}
