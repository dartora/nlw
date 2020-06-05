import express from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("Listagem de users");
  response.json(["Diego", "Clayton", "Robson", "1112"]);
});

app.listen(3333);
