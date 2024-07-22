import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { User } from "../database/models/User";

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, roleId } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Required info: email, password",
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

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Required info: email, password",
      });
    }

    const user = await User.findOne({
      where: { email: email },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Email not found",
      });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: "Password not valid",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        role: user.roleId,
        email: user.email,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "2h",
      }
    );

    res.status(200).json({
      success: true,
      message: "User logged in",
      data: user,
      token: token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error trying to log in",
      error: error,
    });
  }
};
