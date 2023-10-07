const conexion = require("../../db");

const postContactMessage = async (message) => {
  const db = await conexion("jxse_app_db");

  const collection = await db.collection("contact_messages");

  const res = await collection.insertOne(message);

  if (res.acknowledged) {
    return "Message saved successfully";
  }
};

module.exports = postContactMessage;
