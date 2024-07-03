import "dotenv/config";
import express, { Request, Response } from "express";
import { login, register } from "./controllers/auth.controller";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get("/healthy", (req: Request, res: Response) => {
  res.send("Server is healthy");
});

// Authentication
app.post("/api/auth/register", register);
app.post("/api/auth/login", login);

// Server running
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
