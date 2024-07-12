import { Request, Response } from "express";
import { Service } from "../database/models/Service";

export const getAllServices = async (req: Request, res: Response) => {
  try {
    const users = await Service.find();

    res.json({
      success: true,
      message: "All services retrieved",
      data: users,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Error retrieving services",
      error: error.message || error,
    });
  }
};

export const createService = (req: Request, res: Response) => {
  res.send("createService code to be written");
};

export const updateServiceById = (req: Request, res: Response) => {
  res.send(`updateServiceById ${req.params.id} code to be written`);
};

export const deleteServiceById = (req: Request, res: Response) => {
  res.send(`deleteServiceById ${req.params.id} code to be written`);
};
