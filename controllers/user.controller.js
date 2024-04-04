"use strict";
const model = require("../models/user.model");

function getAllUsers(req, res, next) {
  try {
    res.json(model.getAllUsers());
  } catch (err) {
    console.error("Error while getting users ", err.message);
    next(err);
  }
}

function getUserById(req, res, next) {
  try {
    res.json(model.getUserById(req.params.id));
  } catch (err) {
    console.error("Error while getting user  ", err.message);
    next(err);
  }
}

module.exports = {
  getAllUsers,
  getUserById,
};
