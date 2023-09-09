import express from "express";
import "dotenv/config";
import { require } from "./utils.js";
import cors from "cors";

const nba = require("./nba.json");
const app = express();

const port = process.env.PORT ?? 3000;
let counter = 30;

app.use(express.json());
app.use(cors());

app.get("/nba", (req, res) => {
  res.send(nba);
});

app.get("/nba/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const equipo = nba.find((equipo) => equipo.id === id);
  return res.status(200).json(equipo);
});

app.post("/nba", (req, res) => {
  console.log(req.body);
  res.send("Holi mandaron algo");

  if (
    !req.body.name ||
    !req.body.nickname ||
    !req.body.code ||
    !req.body.city ||
    !req.body.logo ||
    !req.body.allstar ||
    !req.body.name ||
    !req.body.nbaFranchise ||
    !req.body.leagues
  ) {
    return res.status(400).json({ error: "error de peticion" });
  }

  const equipo = req.body;
  const id = ++counter;
  nba.push({ id, ...equipo });
  return res.status(201).json(nba);
});

app.patch("/nba/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = nba.findIndex((equipo) => equipo.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Equipo no encontrada" });
  } else {
    const teamUpdated = { ...nba[index], ...req.body };
    nba[index] = teamUpdated;
    res.json(teamUpdated);
  }
});

app.delete("/nba/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = nba.findIndex((equipo) => equipo.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Equipo no encontrada" });
  }
  nba.splice(index, 1);

  res.status(204).json(nba);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
