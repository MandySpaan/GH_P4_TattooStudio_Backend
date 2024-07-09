import { Request, Response } from "express";
import { User } from "../database/models/User";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    //ToDo: add code to show max 10 users per page
    //ToDo: make results so that roleId shows the name of the role
    const users = await User.find({
      select: {
        password: false,
      },
    });

    res.json({
      success: true,
      message: "All users retrieved",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving users",
      error: error,
    });
  }
};

export const getUserProfile = (req: Request, res: Response) => {
  res.send("getUserProfile code to be written");
};

export const updateUserProfile = (req: Request, res: Response) => {
  res.send("updateUserProfile code to be written");
};

export const getUserByEmail = (req: Request, res: Response) => {
  res.send("getUserByEmail code to be written");
};

export const deleteUser = (req: Request, res: Response) => {
  res.send("deleteUser code to be written");
};

export const changeUserRole = (req: Request, res: Response) => {
  res.send("changeUserRole code to be written");
};
