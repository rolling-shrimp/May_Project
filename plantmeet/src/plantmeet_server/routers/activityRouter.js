const express = require("express");
const router = express.Router();
const activityController = require("../controller/activityController");


// activity
router.get("/", activityController.index);


module.exports = router;
