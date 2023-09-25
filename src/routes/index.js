const { Router } = require("express");
const jxseRouter = require("./jxseRoutes/jxseRoutes");

const router = Router();

router.use("/jxse", jxseRouter);

module.exports = router;
