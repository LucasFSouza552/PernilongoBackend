"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var routes_1 = require("./routes");
var app = (0, express_1.default)();
// Middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Rotas
app.use(routes_1.default);
// Porta
var PORT = 3000;
app.listen(PORT, function () {
    console.log("Pernilongo server running at http://localhost:".concat(PORT));
});
