const express = require("express");
const router = express.Router();
const blogModel = require("../models/blogModel");

/* GET home page. */
router.get("/", async function(req, res, next) {
  res.json("Coronavirus Blog API").status(200);
});

router.get("/all", async function(req, res, next) {
  let blogs = await blogModel.getallBlog();
  res.json(blogs);
});

module.exports = router;
