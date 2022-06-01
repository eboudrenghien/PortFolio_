//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
require("dotenv").config({ path: "./.env" })
const authRoute = require ("./routes/auth")

const app = express();

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); 

mongoose
    .connect(process.env.URL_API, { useNewUrlParser: true, useUnifiedTopology:true })
    .then(console.log("Connexion au mongoDB"))
    .catch((err) => console.log(err))

    app.use("/back_end/auth", authRoute)

    app.listen(process.env.PORT, function () {
        console.log("Le serveur est connecté sur le port 5000 => http://localhost:5000");
    });