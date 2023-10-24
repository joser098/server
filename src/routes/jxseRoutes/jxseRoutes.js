const getProfile = require("../../handlers/jxseHandlers/getProfile");
const getProjects = require("../../handlers/jxseHandlers/getProjects");
const postMessage = require("../../handlers/jxseHandlers/postMessage");
const postSurveyResult = require("../../handlers/jxseHandlers/postSurveyResult");

const jxseRouter = require("express").Router();

jxseRouter.get("/profile", getProfile);
jxseRouter.get("/projects", getProjects);
jxseRouter.post("/message", postMessage);
jxseRouter.post("/survey", postSurveyResult);

module.exports = jxseRouter;
