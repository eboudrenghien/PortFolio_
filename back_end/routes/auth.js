const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require('bcryptjs')

// s'enregistrer
router.post("/senregistrer", async (req, res) => {
    try  {

        const salt = await bcrypt.genSaltSync(10)
        const hash = await bcrypt.hashSync(req.body.mdp, salt)
        const newUser = new User ({
            pseudo: req.body.pseudo,
            email: req.body.email,
            mdp: hash
            
        })

        const user = await newUser.save(); //sauvegarde les données d'utilisateur
        res.status(200).json(user)
    } catch(err){
        res.status(500).json(err)
    }
})

//connexion
router.post("/connexion", async (req, res) => {
    try {
        const user = await User.findOne({pseudo: req.body.pseudo});
        !user && res.status(400).json("Erreur d'identification");

        const validation = await bcrypt.compareSync(req.body.mdp, user.mdp);
        !validation && res.status(400).json("Erreur d'identification");

        const {mdp, ... others} = user._doc;
        res.status(200).json(others)
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router