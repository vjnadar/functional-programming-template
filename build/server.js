"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("./routes");
var RouterSingleton_1 = __importDefault(require("./routes/RouterSingleton"));
var server = express_1.default();
require("dotenv").config();
server.use(express_1.default.json());
server.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Orgin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS,GET,POST,PUT,PATCH");
    next();
});
server.use("", RouterSingleton_1.default.getRouter());
server.use(function (error, req, res, next) {
    console.log("Main Error Control");
    new Error();
    console.log(error);
    var statusCode = error.statusCode || 500;
    var message = error.message || "Server error";
    res.status(statusCode).json({ message: message, statusCode: statusCode });
});
var _server = server.listen(8080);
module.exports = _server;
