// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here

router.get("/movies", (req, res) => {
  // console.log("sending router");
  res.send("hello from movies route!");
});

module.exports = router;