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

mongoose.connect(process.env.URL, {useNewUrlParser: true})

const articleSchema = {
    titre : String,
    contenu : String
}
const Article = mongoose.model("Article", articleSchema)
//TODO

app.get("/articles", (req, res) => {
    Article.find((err, foundArticles) => {
        console.log(foundArticles);
    })
})

app.listen(5000, function() {
  console.log("Le serveur est connecté sur le port 5000 => http://localhost:5000/articles");
});