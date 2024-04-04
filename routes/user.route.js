"use strict";
const express = require("express");
const router = express.Router();

const usercontroller = require("../controllers/user.controller");

router.get("/all", usercontroller.getAllUsers);

router.get("/:id", usercontroller.getUserById);

module.exports = router;