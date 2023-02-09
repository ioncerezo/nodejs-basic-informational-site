
const express = require('express')
const router = express.Router()

router.get("/", (req, res) => res.render('users-index'))
router.get("/:id", (req, res) => res.render('users', {text: req.params.id}))


module.exports = router