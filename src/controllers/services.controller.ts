import { Request, Response } from "express";

export const getAllServices = (req: Request, res: Response) => {
  res.send("getAllServices code to be written");
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
