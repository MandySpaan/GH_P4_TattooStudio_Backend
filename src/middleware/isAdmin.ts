import { NextFunction, Request, Response } from "express";

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.tokenData.role != "1") {
      return res.status(403).json({
        success: false,
        message: "You have to be admin for this",
      });
    }

    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in admin entree",
    });
  }
};
