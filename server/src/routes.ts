import express from "express";
const routes = express.Router();

routes.get("/", (request, response) => {
  return response.json({ nessage: "Hello sexta krl!" });
});

export default routes;
