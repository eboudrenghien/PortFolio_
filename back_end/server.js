//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
require("dotenv").config({ path: "./.env" })
const authRoute = require ("./routes/auth")
const userRoute = require ("./routes/users")
const postRoute = require ("./routes/posts")
const multer = require ("multer")
const app = express();
const path = require ("path")

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); 
app.use("/images", express.static(path.join(__dirname, "/images")))

mongoose
    .connect(process.env.URL_API, { useNewUrlParser: true, useUnifiedTopology:true })
    .then(console.log("Connexion au mongoDB"))
    .catch((err) => console.log(err))

    //stockage d'images - Problème rencontrer, quand je clique pour choisir mon image sur le dossier, ça me ferme la fenêtre Postman
const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, "images")
    }, filename:(req, file, cb) => {
        cb(null, req.body.name)
    }
})

const upload = multer ({storage: storage})
app.post("/back_end/actualites/upload", upload.single("file", (req, res) => {
    res.status(200).json("L'image a bien été téléchargé")
}))

    app.use("/back_end/auth", authRoute)
    app.use("/back_end/users", userRoute)
    app.use("/back_end/posts", postRoute)

    app.listen("5500", function () {
        console.log("Le serveur est connecté sur le port 5500 => http://localhost:5500");
    });