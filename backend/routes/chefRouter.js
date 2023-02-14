const express = require("express");
const { getChefs } = require("../controllers/chefController");


const router = express.Router();
router.route("/chefs").get(getChefs);

module.exports = router;
