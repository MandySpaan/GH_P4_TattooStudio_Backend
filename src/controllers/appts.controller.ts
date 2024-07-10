import { Request, Response } from "express";
import { Appointment } from "../database/models/Appointment";

export const createAppointment = async (req: Request, res: Response) => {
  //ToDo: instead of passing the service id, pass the service name
  try {
    const userId = req.tokenData.id;
    const appointmentDate = req.body.appointmentDate;
    const serviceId = req.body.serviceId;

    if (!appointmentDate || !serviceId) {
      return res.status(400).json({
        success: false,
        message: "Required info: appointmentDate, serviceId",
      });
    }

    // ToDo: check if there is already an appointment made for that day

    const newAppointment = await Appointment.create({
      userId: userId,
      appointmentDate: appointmentDate,
      serviceId: serviceId,
    }).save();

    res.status(201).json({
      success: true,
      message: "Appointment made",
      data: newAppointment,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Error trying to make appointment",
      error: error.message || error,
    });
  }
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
