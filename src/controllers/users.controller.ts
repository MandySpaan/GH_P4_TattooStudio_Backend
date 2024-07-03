import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
  res.send("getUsers code to be written");
  //get all users if no email specified
  //get user by email if email is specified
};

export const getUserProfile = (req: Request, res: Response) => {
  res.send("getUserProfile code to be written");
};

export const updateUserProfile = (req: Request, res: Response) => {
  res.send("updateUserProfile code to be written");
};

export const deleteUser = (req: Request, res: Response) => {
  res.send("deleteUser code to be written");
};

export const changeUserRole = (req: Request, res: Response) => {
  res.send("changeUserRole code to be written");
};
