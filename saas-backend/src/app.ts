import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import projectsRouter from "./routes/projects";
dotenv.config();

const app = express();
app.use("/api/projects", projectsRouter);
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

export default app;
