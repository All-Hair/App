const express = require("express");
var router = require("express").Router();
const { create, findAll , del , update } = require("../controller/user.controller");

// Create a new user
router.post("/user/", create);
// get all user
router.get("/user/", findAll);
// delete a service
router.delete("/user/delete/:id", del);
// update user
router.put("/user/update/:id", update);

module.exports = router;
