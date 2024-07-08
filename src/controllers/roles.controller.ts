import { Request, Response } from "express";
import { Role } from "../database/models/Role";

export const createRole = async (req: Request, res: Response) => {
  try {
    const role = req.body;

    const newRole = await Role.create({ roleName: role }).save();

    res.status(201).json({
      success: true,
      message: "Role created",
      data: newRole,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Error trying to create role",
      error: error.message || error,
    });
  }
};
