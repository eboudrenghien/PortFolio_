// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://laSurdite:<password>@surdite.vqcnm.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()
const PORT = 5000

const app = express()


// app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

mongoose
    .connect(process.env.mongo_url, {
    
        useUnifiedTopology: true,
    })
    .then(console.log("Connexion à MongoDB"))
    .catch((err) => console.log(err))

const actualitesSchema = {
    "title": String,
    "content": String
}

const Actualites = mongoose.model("Actualites", actualitesSchema)
app.get("/Actualites", (req, res) => {
    Actualites.find ((err, foundActualites) => { 
        res.send(foundActualites)
    })
})

app.listen(PORT, () => {
    console.log("Le serveur démarre sur le port http://localhost:5000");
})