const conexion = require("../../db");

const postContactMessage = async (message) => {
  const db = await conexion("jxse_app_db");

  const collection = await db.collection("contact_messages");

  return collection.insertOne(message).toArray();
};

module.exports = postContactMessage;
