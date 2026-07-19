const express = require("express");
const router = require("express").Router();

const authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/auth");

router.post("/login", authController.login);

router.post("/register", authController.register);

router.post("/refresh", authController.refreshToken);

router.get("/me", authMiddleware, authController.getCurrentUser);

module.exports = router;
