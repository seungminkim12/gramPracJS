"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("./controller/user.controller");
const user_schema_1 = require("./schema/user.schema");
const validateResource_1 = __importDefault(require("./middleware/validateResource"));
function routes(app) {
    app.get('/healthcheck', (req, res) => res.sendStatus(200));
    app.post('/api/users', (0, validateResource_1.default)(user_schema_1.createUserSchema), user_controller_1.createdUserHandler);
}
exports.default = routes;
