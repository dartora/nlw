import express, { request, response } from "express";
import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const routes = express.Router();

const itemsController = new ItemsController();
routes.get("/items", itemsController.index);

const pointsController = new PointsController();
routes.post("/points", pointsController.create);
routes.get("/points", pointsController.index);

routes.get("/points/:id", pointsController.show);
// index, show, create, update, delete

export default routes;

// Service  Pattern
// Repository Pattern ( Data Mapper )
