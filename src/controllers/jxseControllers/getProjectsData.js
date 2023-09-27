const conexion = require("../../db");

const getProjectsData = async () => {
  const db = await conexion("jxse_app_db");

  const collection = await db.collection("projects");

  return collection.find({}).toArray();
};

module.exports = getProjectsData;
