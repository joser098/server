const getProfile = require("../../handlers/jxseHandlers/getProfile");
const getProjects = require("../../handlers/jxseHandlers/getProjects");

const jxseRouter = require("express").Router();

jxseRouter.get("/profile", getProfile);
jxseRouter.get("/projects", getProjects);

module.exports = jxseRouter;
