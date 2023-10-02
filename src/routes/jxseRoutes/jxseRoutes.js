const getProfile = require("../../handlers/jxseHandlers/getProfile");
const getProjects = require("../../handlers/jxseHandlers/getProjects");
const postMessage = require("../../handlers/jxseHandlers/postMessage");

const jxseRouter = require("express").Router();

jxseRouter.get("/profile", getProfile);
jxseRouter.get("/projects", getProjects);
jxseRouter.post("/message", postMessage);

module.exports = jxseRouter;
