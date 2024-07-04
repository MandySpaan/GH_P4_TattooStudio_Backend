import { Request, Response } from "express";

export const createAppointment = (req: Request, res: Response) => {
  res.send("createAppointment code to be written");
};

export const updateAppointment = (req: Request, res: Response) => {
  res.send("updateAppointment code to be written");
};

export const getAppointmentById = (req: Request, res: Response) => {
  res.send(`getAppointmentById ${req.params.id} code to be written`);
};

export const getAllAppointments = (req: Request, res: Response) => {
  res.send(`getAllAppointments code to be written`);
};
