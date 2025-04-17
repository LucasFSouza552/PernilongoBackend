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
exports.createUser = createUser;
exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
var users = [
    { id: 1, name: "Ana" },
    { id: 2, name: "Beto" }
];
function createUser(name) {
    var newId = Math.max.apply(Math, __spreadArray(__spreadArray([], users.map(function (u) { return u.id; }), false), [0], false));
    var newUser = { id: newId, name: name };
    users.push(newUser);
    return newUser;
}
function getAllUsers() {
    return users;
}
function getUserById(id) {
    return users.find(function (u) { return u.id === id; });
}
