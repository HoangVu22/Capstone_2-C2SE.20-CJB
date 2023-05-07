const { Router } = require("express");
const userRoute = require("./users");
const messageRoute = require("./messages");

const router = Router();

router.use("/users", userRoute);
router.use("/messages", messageRoute);

module.exports = router;
