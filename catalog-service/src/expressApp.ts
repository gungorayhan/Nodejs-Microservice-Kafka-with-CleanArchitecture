import express from "express";
import catalogRouter from "./api/catalog.routes";
import "reflect-metadata"

const app=express();

app.use(express.json());

app.use("/",catalogRouter);

export default app;