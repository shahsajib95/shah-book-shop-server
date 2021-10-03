const express = require("express");

const { getUserbyToken, getOrder, postOrder } = require("../controllers/user/userController");
const { requirePath } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/getUserbyToken", getUserbyToken);
router.post("/postOrder", requirePath, postOrder);
router.get("/getOrder/:id", requirePath, getOrder);

module.exports = router;
