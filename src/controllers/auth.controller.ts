import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../database/models/User";

export const register = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password, roleId } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Required info: firstName, lastName, email, password",
      });
    }

    //ToDo, validate email format

    if (password.length < 8 || password.length > 15) {
      return res.status(400).json({
        success: false,
        message: "The password has to be between 8 and 15 characters",
      });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
      roleId: roleId,
    }).save();

    res.status(201).json({
      success: true,
      message: "User registered",
      data: newUser,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Error trying to register user",
      error: error.message || error,
    });
  }
};

export const login = (req: Request, res: Response) => {
  res.send("Login code to be written");
};
