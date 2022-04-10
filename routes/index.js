const express = require('express');
const router = express.Router()

const moviesRouter = require("./movies.route")

router.get("/", (req, res) => {
  res.json("ini dari server")
})

router.use("/movies", moviesRouter)
// router.use("/user", userRouter)
// router.use("/favorite", favoriteRouter)

module.exports = router

