const path = require("path")
const router = require("express").Router()


// Get route for /notes
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..//public/notes.html"))
})


// GET route for *
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})


module.exports = router
