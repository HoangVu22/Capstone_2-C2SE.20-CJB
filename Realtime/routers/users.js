const { Router } = require("express");
const { findById } = require("../controllers/users");

const router = Router();

router.get("/:id", findById);

module.exports = router;
