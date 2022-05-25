//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
require("dotenv").config({ path: "./.env" })
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(process.env.URL_API, { useNewUrlParser: true })

const articleSchema = {
    titre: String,
    contenu: String
}
const Article = mongoose.model("Article", articleSchema)

app.route("/actualites")
    .get((req, res) => {
        Article.find((err, foundArticles) => {
            if (!err) {
                res.send(foundArticles)
            } else {
                res.send(err)
            }
        })
    })
    .post((req, res) => {

        const newArticle = new Article({
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
    .delete((req, res) => {
        Article.deleteMany((err) => {
            if (!err) {
                res.send("La suppression des articles a été réalisé avec succès")
            } else {
                res.send(err)
            }
        })

    })
//TODO
// affiche la collection "articles"

app.get("/actualites",)

// créer un article dans la collection "articles"
app.post("/actualites",)

// supprime la collection "articles"
app.delete("/actualites",);


// Affichage d'un article 

app.route("/actualites/:articleTitre")

    .get((req, res) => {
        Article.findOne({ titre: req.params.articleTitre }, (err, foundArticle) => {
            if (foundArticle) {
                res.send(foundArticle)
            } else {
                res.send("Aucun article correspond à ce titre n'a été trouvé sur le blog")
            }
        });
    })

    // maj de l'article
    .put((req, res) => {
        Article.updateOne({ titre: req.params.articleTitre }, { titre: req.body.titre, contenu: req.body.contenu }, (err) => {
            if (!err) {
                res.send("L'article a été mis à jour.")
            } else {
                res.send("L'article n'a pas pu être mis à jour")
            }
        });
    })

    .patch((req, res) => {
        Article.updateMany({ titre: req.params.articleTitre }, { $set: req.body }, (err) => {
            if (!err) {
                res.send("Les champs ont bien été mis à jour.")
            } else {
                res.send("Un problème a été rencontré")
            }
        });
    })

    .delete((req, res) => {
        Article.deleteOne({titre: req.params.articleTitre}, (err) => {
            if (!err) {
                res.send("L'article a bien été supprimé")
            } else {
                res.send("L'article n'a pas pu être supprimé")
            }
        })
    })

    app.listen(process.env.PORT, function () {
        console.log("Le serveur est connecté sur le port 5000 => http://localhost:5000/actualites");
    });