const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("template", {
    locals: {
      title: "Blog",
      data: data
    },
    partials: {
      partial: "partal-index"
    }
  });
});

module.exports = router;
