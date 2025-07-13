const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { getAllPasswords, addPassword, deletePassword } = require("../controllers/passwordController");

// /api/password
router.get("/all", auth, getAllPasswords);
router.post("/add", auth, addPassword);
router.delete("/:id", auth, deletePassword);

module.exports = router;
