import express from "express";
import cors from "cors";
import dependencies from "./config/dependencies";
import { routes } from "./router";
import session, { MemoryStore, SessionOptions, SessionData } from 'express-session'
import dotenv from "dotenv";
dotenv.config();

declare module 'express-session' {
  interface SessionData {
    userData: {
      _id: string,
      name: string,
      email: string,
      password: string,
      phone: string
    }|undefined;
    recruiterData: {
      _id: string,
      name: string,
      email: string,
      worksAr:string,
      password: string,
      phone: string
    }|undefined;
    Otp: string | undefined;
    rOtp: string |undefined;
    refreshToken: string;
  }
}

const app = express();
const store = new MemoryStore()

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 30 * 60 * 60 * 1000,
      httpOnly: true,
    },
    store: store,
  } as SessionOptions)
);

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
