const router = require("express").Router()
const User = require("../models/User")
const Post = require("../models/Post")


// Créer un post
router.post("/actualites", async (req, res) => {
    const newPost = new Post(req.body)
    try {
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    } catch (err) {
        res.status(500).json(err)
    }
})
//maj

router.put("/actualites/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        // if(post.pseudo === req.body.pseudo) {

            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                }, 
                {new:true})
                res.status(200).json(updatedPost)
            } catch (err) {
                res.status(500).json(err)
            }
        // } else {
        //     res.status(401).json("Vous ne pouvez pas mettre à jour cette publication ! ")
        // }
    } catch (err) {
        res.status(500).json(err)
    }
})

// // suppression
router.delete("/actualites/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        // if(post.pseudo === req.body.pseudo) {

            try {
               await post.delete()
                res.status(200).json("La publication a bien été supprimée...")
            } catch (err) {
                res.status(500).json(err)
            }
        // } else {
        //     res.status(401).json("Vous ne pouvez pas supprimer cette publication ! ")
        // }
    } catch (err) {
        res.status(500).json(err)
    }
})


router.get("/actualites/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json(err)
    }
})

// voir toutes les publications
router.get("/actualites", async (req, res) => {
    const pseudo = req.query.user
    try {
        let posts
       if (pseudo) {
           posts = await Post.find({pseudo})
       } else {
           posts = await Post.find()
       }
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router