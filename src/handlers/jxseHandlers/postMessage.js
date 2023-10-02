const postContactMessage = require("../../controllers/jxseControllers/postContactMessage");

const postMessage = async (req, res) => {
  try {
    const response = await postContactMessage(req.body);

    return res.status(201).json(response);
  } catch (error) {
    console.log(error);
  }
};

module.exports = postMessage;
