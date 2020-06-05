import express, { request, response } from "express";
import routes from "./routes";

const app = express();

const users = ["Diego", "Clayton", "Robson", "1112"];

app.use(express.json());
app.use(routes);
app.listen(3333);
