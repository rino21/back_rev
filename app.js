const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT
const app = express()

const users = [
    {
        nom: "RAMAMINIRINA",
        prenom: "Victorino"
    },
    {
        nom: "RAMAMBASOA",
        prenom: "Francine"
    },
    {
        nom: "RAHARINIRINA",
        prenom: "Juvance"
    }
];

app.get("/",(req, res)=>{
    res.json("Bienvenue, REVISION");
})

app.get("/api",(req, res)=>{
    res.json(users);
})

app.listen(PORT, ()=>{
    console.log("app run on port : " + PORT);
})