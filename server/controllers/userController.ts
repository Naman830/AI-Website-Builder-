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

// CREATE USER PROJECT

export const createUserProject = async (req: Request, res: Response) => {
  const userId = req.userId;
  try {
    const { initial_prompt } = req.body;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized User" });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (user && user.credits < 5) {
      return res
        .status(403)
        .json({ message: "add credits to create more projects" });
    }

    // Create a new project
    const project = await prisma.websiteProject.create({
      data: {
        name:
          initial_prompt.length > 50
            ? initial_prompt.substring(0, 47) + "..."
            : initial_prompt,
        initial_prompt,
        userId,
      },
    });

    await prisma.conversation.create({
      data: {
        role: "user",
        content: initial_prompt,
        projectId: project.id,
      },
    });

    // DEDUCT CREDITS
    await prisma.user.update({
      where: { id: userId },
      data: { credits: { decrement: 5 } },
    });

    // Update user total creations
    await prisma.user.update({
      where: { id: userId },
      data: { totalCreation: { increment: 1 } },
    });

    res.json({
      projectId: project.id,
    });
  } catch (error: any) {
    console.log();
    console.log(error.code || error.message);
    return res.status(500).json({ message: error.message });
  }
};
