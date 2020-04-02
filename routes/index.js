const express = require("express");
const router = express.Router();
const blogModel = require("../models/blogModel");

/* GET home page. */
router.get("/", async function(req, res, next) {
  const data = await blogModel.getallBlog();

  res.render("template", {
    locals: {
      title: "Blog",
      data: data
    },
    partials: {
      partial: "partial-index"
    }
  });
});

module.exports = router;
