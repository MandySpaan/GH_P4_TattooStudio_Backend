import { Request, Response } from "express";
import { User } from "../database/models/User";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    //ToDo: add code to show max 10 users per page
    const users = await User.find({
      select: {
        password: false,
      },
      relations: ["role"],
    });

    res.json({
      success: true,
      message: "All users retrieved",
      data: users,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Error retrieving users",
      error: error.message || error,
    });
  }
};

export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.tokenData.id;

    const user = await User.findOne({
      where: {
        id: userId,
      },
      select: ["id", "firstName", "lastName", "email", "role"],
      relations: ["role"],
    });

    res.json({
      success: true,
      message: "User profile retrieved",
      data: user,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Error trying to retrieve user profile",
      error: error.message || error,
    });
  }
};

export const updateUserProfile = async (req: Request, res: Response) => {
  try {
    const userIdToUpdate = req.tokenData.id;
    const body = req.body;

    const userUpdated = await User.update(
      {
        id: userIdToUpdate,
      },
      body
    );

    res.status(200).json({
      success: true,
      message: "User updated",
      data: userUpdated,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Error trying to update user",
      error: error.message || error,
    });
  }
};

export const getUserByEmail = (req: Request, res: Response) => {
  //ToDo: extra, not mandatory for project
  res.send("getUserByEmail code to be written");
};

export const deleteUser = (req: Request, res: Response) => {
  //ToDo: extra, not mandatory for project
  res.send("deleteUser code to be written");
};

export const changeUserRole = (req: Request, res: Response) => {
  //ToDo: extra, not mandatory for project
  res.send("changeUserRole code to be written");
};
