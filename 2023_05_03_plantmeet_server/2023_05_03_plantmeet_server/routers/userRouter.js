const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");


// user
router.post("/login/:id", userController.login);
router.get("/", userController.index);
router.post("/", userController.userCreate);
router.put("/:id", userController.userUpdate);
router.delete("/:id", userController.userDelete);

// user_type
router.get("/type", userController.type);



module.exports = router;
