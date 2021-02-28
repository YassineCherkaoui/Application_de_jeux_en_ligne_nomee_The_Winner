const express = require("express");
const verify = require("../controllers/validation/tokenVerification");
const router = express.Router();
const {
  getAllAdmins,
  addAdmin,
  getOneAdmin,
  loginAdmin,
} = require("../controllers//adminController");

router.get("/", verify, getAllAdmins);

router.post("/", verify, addAdmin);

router.get("/:id", getOneAdmin);

router.post("/login", loginAdmin);

module.exports = router;
