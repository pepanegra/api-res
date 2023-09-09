import { Router } from "express";
import { require } from "./utils.js";

const nba = require("./nba.json");
const router = Router()
 
router.get("/", (req, res) => {
    res.send(nba);
})