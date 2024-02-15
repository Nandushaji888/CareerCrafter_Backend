import express from "express";
import cors from "cors";
import dependencies from "./config/dependencies";
import { routes } from "./router"
import dotenv from "dotenv";
dotenv.config();



const app = express();

app.use(express.json());



app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));

app.use("/api", routes(dependencies));

export { app };
