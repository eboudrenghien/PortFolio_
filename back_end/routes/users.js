const router = require("express").Router()
const User = require("../models/User")
const Post = require("../models/Post")
const bcrypt = require('bcryptjs')

//maj

router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.mdp) {
            const salt = await bcrypt.genSaltSync(10)
            req.body.mdp = await bcrypt.hashSync(req.body.mdp, salt)
        }

        try {
            const updatedUser = await User.findByIdAndUpdate
            (req.params.id, {
                $set: req.body,
            },
                { new: true })
            res.status(200).json(updatedUser)
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(401).json("Vous ne pouvez pas mettre à jour ce compte.")
    }
})


// suppression
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id)
            try {
                await Post.deleteMany({pseudo: user.pseudo})
                await User.findByIdAndDelete(req.params.id)
                
                res.status(200).json("Votre compte a bien été supprimé...")
            } catch (err) {
                res.status(500).json(err)
            }
        } catch (err) {
            res.status(404).json("L'utilisateur n'a pas été trouvé")
        }
    } else {
        res.status(401).json("Vous ne pouvez pas supprimer ce compte.")
    }
})


router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const {mdp, ... others} = user._doc
        res.status(200).json(others)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router