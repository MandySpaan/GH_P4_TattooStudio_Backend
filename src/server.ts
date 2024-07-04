import "dotenv/config";
import express, { Request, Response } from "express";
import { login, register } from "./controllers/auth.controller";
import {
  changeUserRole,
  deleteUser,
  getUserProfile,
  getUsers,
  updateUserProfile,
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

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get("/healthy", (req: Request, res: Response) => {
  res.send("Server is healthy");
});

// Authentication
app.post("/api/auth/register", register);
app.post("/api/auth/login", login);

//Users
app.get("/api/users", getUsers);
app.get("/api/users/profile", getUserProfile);
app.post("/api/users/profile", updateUserProfile);
app.delete("/api/users/:id", deleteUser);
app.put("/api/users/:id/role", changeUserRole);

//Appointments
app.post("/api/appointments", createAppointment);
app.put("/api/appointments", updateAppointment);
app.get("/api/appointments/:id", getAppointmentById);
app.get("/api/appointments", getAllAppointments);

//Services
app.get("/api/services", getAllServices);
app.post("/api/services", createService);
app.put("/api/services/:id", updateServiceById);
app.delete("/api/services/:id", deleteServiceById);

// Server running
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
