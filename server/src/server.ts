import express, { request, response } from "express";
import routes from "./routes";
import path from "path";

const app = express();

const users = ["Diego", "Clayton", "Robson", "1112"];

app.use(express.json());
app.use(routes);

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.listen(3333);
