import { Request, Response } from "express";
import prisma from "../lib/prisma.js";

// GET USER CRREDITS
export const getUserCredits = async (req: Request, res: Response) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized User" });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    res.json({
      credits: user?.credits,
    });
  } catch (error: any) {
    console.log();
    console.log(error.code || error.message);
    return res.status(500).json({ message: error.message });
  }
};
