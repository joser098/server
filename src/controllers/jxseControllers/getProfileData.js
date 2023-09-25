const conexion = require("../../db");

const getProfileData = async () => {
  const db = await conexion("jxse_app_db");

  const collection = await db.collection("profile");

  return collection.find({}).toArray();
};

module.exports = getProfileData;
