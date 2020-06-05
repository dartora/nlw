import express, { request, response } from "express";

const app = express();
const users = ["Diego", "Clayton", "Robson", "1112"];
app.get("/users", (request, response) => {
  console.log("Listagem de users");
  return response.json(users);
});

app.get("/users/:id", (request, response) => {
  return response.json(users[Number(request.params.id)]);
});

app.post("/users", (request, response) => {
  // console.log("Listagem de users");
  const user = { name: "Rodolfo", email: "rodolfo.ds@aluno.ifsc.edu.br" };
  return response.json(user);
});

app.listen(3333);
