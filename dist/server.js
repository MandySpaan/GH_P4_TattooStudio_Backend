"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./controllers/auth.controller");
const users_controller_1 = require("./controllers/users.controller");
const appts_controller_1 = require("./controllers/appts.controller");
const services_controller_1 = require("./controllers/services.controller");
const db_1 = require("./database/db");
const roles_controller_1 = require("./controllers/roles.controller");
const auth_1 = require("./middleware/auth");
const isAdmin_1 = require("./middleware/isAdmin");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = process.env.PORT || 4000;
app.get("/healthy", (req, res) => {
    res.send("Server is healthy");
});
//Roles
app.post("/api/roles", roles_controller_1.createRole);
// Authentication
app.post("/api/auth/register", auth_controller_1.register);
app.post("/api/auth/login", auth_controller_1.login);
//Users
app.get("/api/users", auth_1.auth, isAdmin_1.isAdmin, users_controller_1.getAllUsers);
app.get("/api/users/profile", auth_1.auth, users_controller_1.getUserProfile);
app.post("/api/users/profile", auth_1.auth, users_controller_1.updateUserProfile);
app.get("/api/users/email", users_controller_1.getUserByEmail);
app.delete("/api/users/:id", users_controller_1.deleteUser);
app.put("/api/users/:id/role", users_controller_1.changeUserRole);
//Appointments
app.post("/api/appointments", auth_1.auth, appts_controller_1.createAppointment);
app.put("/api/appointments/:id", auth_1.auth, appts_controller_1.updateAppointment);
app.get("/api/appointments/:id", auth_1.auth, isAdmin_1.isAdmin, appts_controller_1.getAppointmentById);
app.get("/api/appointments", auth_1.auth, isAdmin_1.isAdmin, appts_controller_1.getAllAppointments);
//Services
app.get("/api/services", auth_1.auth, isAdmin_1.isAdmin, services_controller_1.getAllServices);
app.post("/api/services", services_controller_1.createService);
app.put("/api/services/:id", services_controller_1.updateServiceById);
app.delete("/api/services/:id", services_controller_1.deleteServiceById);
// Db connected & server running
db_1.AppDataSource.initialize()
    .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
    .catch((error) => {
    console.log(error);
});
