import "dotenv/config";
import express, { Request, Response } from "express";
import { login, register } from "./controllers/auth.controller";
import {
  changeUserRole,
  deleteUser,
  getUserProfile,
  getAllUsers,
  updateUserProfile,
  getUserByEmail,
} from "./controllers/users.controller";
import {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointment,
} from "./controllers/appts.controller";
import {
  createService,
  deleteServiceById,
  getAllServices,
  updateServiceById,
} from "./controllers/services.controller";
import { AppDataSource } from "./database/db";
import { createRole } from "./controllers/roles.controller";
import { auth } from "./middleware/auth";
import { isAdmin } from "./middleware/isAdmin";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get("/healthy", (req: Request, res: Response) => {
  res.send("Server is healthy");
});

//Roles
app.post("/api/roles", createRole);

// Authentication
app.post("/api/auth/register", register);
app.post("/api/auth/login", login);

//Users
app.get("/api/users", auth, isAdmin, getAllUsers);
app.get("/api/users/profile", auth, getUserProfile);
app.post("/api/users/profile", auth, updateUserProfile);
app.get("/api/users/email", getUserByEmail);
app.delete("/api/users/:id", deleteUser);
app.put("/api/users/:id/role", changeUserRole);

//Appointments
app.post("/api/appointments", auth, createAppointment);
app.put("/api/appointments", updateAppointment);
app.get("/api/appointments/:id", getAppointmentById);
app.get("/api/appointments", getAllAppointments);

//Services
app.get("/api/services", getAllServices);
app.post("/api/services", createService);
app.put("/api/services/:id", updateServiceById);
app.delete("/api/services/:id", deleteServiceById);

// Db connected & server running
AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
