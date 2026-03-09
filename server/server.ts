import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";

import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: process.env.TRUSTED_ORIGINS?.split(",") || [],
  credentials: true,
};

// Middleware
app.use(cors(corsOptions));

app.all("/api/auth/{*any}", toNodeHandler(auth));

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Server is Live!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
