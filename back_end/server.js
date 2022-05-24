//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
require("dotenv").config({ path: "./.env" })
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));

mongoose.connect(process.env.URL_API, {useNewUrlParser: true})

const articleSchema = {
    titre : String,
    contenu : String
}
const Article = mongoose.model("Article", articleSchema)
//TODO
// affiche la collection "articles"

app.get("/actualites", (req, res) => {
    Article.find((err, foundArticles) => {
        if(!err) {
            res.send(foundArticles)
        } else {
            res.send(err)
        }
    })
})

// créer un article dans la collection "articles"
app.post("/actualites", (req, res) => {

   const newArticle = new Article ({
        titre: req.body.titre,
        contenu: req.body.contenu
   })
   newArticle.save((err) => {
       if (!err) {
           res.send("Votre nouvel article a été ajouté avec succès")
       } else {
           res.send(err)
       }
   })
})

// supprime la collection "articles"
app.delete("/actualites", (req, res) => {
    
})
app.listen(process.env.PORT, function() {
  console.log("Le serveur est connecté sur le port 5000 => http://localhost:5000/actualites");
});