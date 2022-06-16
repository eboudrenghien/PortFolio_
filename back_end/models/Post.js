const mongoose = require("mongoose")
const PostSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true,
        unique: true
    },
    contenu: {
        type: String,
        required: true,
        unique: true
    },
    photo: {
        type: String,
        required: false
    },
    pseudo: {
        type: String,
        required: true,
    },
},
    { timestamps: true } // date de maj

)

module.exports = mongoose.model("Post", PostSchema)