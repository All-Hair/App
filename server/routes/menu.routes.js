const express = require("express");
var router = require("express").Router();
const { create, findAll , del , update } = require("../controller/menu.controller");

// Create a new menu
router.post("/", create);
// get all menu
router.get("/", findAll);
// delete a service
router.delete("/delete/:id", del);
// update menu
router.put("/update/:id", update);

module.exports = router;
