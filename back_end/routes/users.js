const router = require("express").Router()
const User = require("../models/User")


// s'enregistrer
router.post("/senregistrer", async (req, res) => {
    try  {

    } catch(err){
        res.status(500).json(err)
    }
})


module.exports = router