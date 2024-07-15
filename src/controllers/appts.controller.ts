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

export const updateAppointment = async (req: Request, res: Response) => {
  try {
    const userId = req.tokenData.id;
    const appointmentIdToUpdate = parseInt(req.params.id);
    const body = req.body;

    const appointment = await Appointment.findOne({
      where: { id: appointmentIdToUpdate },
    });

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    if (appointment.userId !== userId) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to update this appointment",
      });
    }

    const appointmentUpdated = await Appointment.update(
      {
        id: appointmentIdToUpdate,
      },
      body
    );

    res.status(200).json({
      success: true,
      message: "Appointment updated",
      data: appointmentUpdated,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Error trying to update appointment",
      error: error.message || error,
    });
  }
};

export const getMyAppointments = async (req: Request, res: Response) => {
  try {
    const userId = req.tokenData.id;

    const appointments = await Appointment.find({
      where: { userId: userId },
    });
    if (!appointments) {
      return res.status(404).json({
        success: false,
        message: "No appointments found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Appointments found",
      data: appointments,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Error trying get all your appointments",
      error: error.message || error,
    });
  }
};

export const getAppointmentById = async (req: Request, res: Response) => {
  try {
    const appointmentId = parseInt(req.params.id);
    const body = req.body;

    const appointment = await Appointment.findOne({
      where: { id: appointmentId },
      relations: ["user", "service"],
    });

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Appointment found",
      data: appointment,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Error trying to find appointment by id",
      error: error.message || error,
    });
  }
};

export const getAllAppointments = async (req: Request, res: Response) => {
  try {
    //ToDo: add code to show max 10 appointments per page
    const users = await Appointment.find({
      relations: ["user", "service"],
    });

    res.json({
      success: true,
      message: "All appointments retrieved",
      data: users,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Error retrieving appointments",
      error: error.message || error,
    });
  }
};
