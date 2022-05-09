const MongoClient = require ("mongodb").MongoClient;
const assert = require ("assert")

const url = "mongodb://localhost:27017"

// Base de données
const dbName = "LaSurdite"

const client = new MongoClient(url)

client.connect ((err) => {
    assert.equal(null, err)
    console.log("La connexion au serveur a été réalisé avec succès");

    const db = client.db(dbName)

    client.close()
})