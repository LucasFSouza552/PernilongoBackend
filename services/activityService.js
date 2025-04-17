"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createActivity = createActivity;
exports.getAllActivities = getAllActivities;
var activityType_1 = require("../models/activityType");
var userService_1 = require("../services/userService");
var activities = [
    { id: 1, userId: 1, type: activityType_1.ActivityType.RUN, distance: 5, time: 30 },
    { id: 2, userId: 2, type: activityType_1.ActivityType.BIKE, distance: 20, time: 60 }
];
function createActivity(userId, type, distance, time) {
    var user = (0, userService_1.getUserById)(userId);
    if (!user) {
        throw new Error("User does not exist");
    }
    var possibleTypes = Object.values(activityType_1.ActivityType);
    if (!possibleTypes.includes(type)) {
        throw new Error("Invalid ActivityType: ".concat(type));
    }
    var typed = type;
    var newId = Math.max.apply(Math, __spreadArray(__spreadArray([], activities.map(function (a) { return a.id; }), false), [0], false)) + 1;
    var newActivity = { id: newId, userId: userId, type: typed, time: time, distance: distance };
    activities.push(newActivity);
    return newActivity;
}
function getAllActivities() {
    return activities;
}
