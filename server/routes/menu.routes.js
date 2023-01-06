const express = require("express");
var router = require("express").Router();
const { create, findAll , del , update } = require("../controller/menu.controller");

// Create a new menu
router.post("/menu/", create);
// get all menu
router.get("/menu/", findAll);
// delete a service
router.delete("/menu/delete/:id", del);
// update menu
router.put("/menu/update/:id", update);

module.exports = router;
