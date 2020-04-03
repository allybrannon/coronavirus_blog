const express = require("express");
const router = express.Router();
const blogModel = require("../models/blogModel");

/* GET home page. */
router.get("/", async function(req, res, next) {
  res.json("Coronavirus Bloggin").status(200);
});

router.get("/all", async function(req, res, next) {
  let blogs = await blogModel.getallBlog();
  res.json(blogs);
});

router.get("/blog/:id?", async function(req, res) {
  const { id } = req.params;
  let blogs = await blogModel.getId(id);
  res.json(blogs);
});

module.exports = router;
