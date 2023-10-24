const conexion = require("../../db");

const postSurvey = async (survey) => {
  const db = await conexion("jxse_app_db");

  const collection = await db.collection("portfolio_survey");

  const res = await collection.insertOne(survey);

  if (res.acknowledged) {
    return "Survey result saved successfully";
  }
};

module.exports = postSurvey;
