"use strict";
const db = require("../models/db-conn");

function getAllUsers() {
  let sql = "SELECT * FROM users;";
  const data = db.all(sql);
  return data;
}

function getUserById(id) {
  let sql = "SELECT * FROM users WHERE id =? ;";
  const item = db.get(sql, id);
  return item;
}

module.exports = {
  getAllUsers,
  getUserById,
};
