const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    pseudo: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mdp: {
        type: String,
        required: true,
    },
    profilPP: {
        type: String,
        default: "",
    },
},
    { timestamps: true } // date de maj

)

module.exports = mongoose.model("User", UserSchema)