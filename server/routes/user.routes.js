const express = require("express");
var router = require("express").Router();
const { create, findAll , del , update } = require("../controller/user.controller");

// Create a new user
router.post("/", create);
// get all user
router.get("/", findAll);
// delete a service
router.delete("/delete/:id", del);
// update user
router.put("/update/:id", update);

module.exports = router;
