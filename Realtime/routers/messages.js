const { Router } = require("express");
const { messageOfUser } = require("../controllers/messages");

const router = Router();

router.get("/:id/sender/:senderId", messageOfUser);

module.exports = router;
