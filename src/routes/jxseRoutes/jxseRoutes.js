const getProfile = require("../../handlers/jxseHandlers/getProfile");

const jxseRouter = require("express").Router();

jxseRouter.get("/profile", getProfile);

module.exports = jxseRouter;
