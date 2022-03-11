import express from "express";
import morgan from "morgan";
import Knex from 'knex';
import { apiRouter } from "./routes/apiRoutes";
import dotenv from "dotenv";
dotenv.config();

const config = require("../knexfile.js");
const environment = process.env.NODE_ENV!;
const database = Knex(config[environment]);

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/v1/api", apiRouter);

database.raw("SELECT VERSION()").then(
    (version) => console.log((version[0][0]))
).catch((err) => { console.log(err); throw err })


app.listen(PORT, () =>
    console.log(`🚀 REST API server ready at ⭐️: http://localhost:${PORT}`)
);
