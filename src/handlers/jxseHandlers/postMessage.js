const postContactMessage = require("../../controllers/jxseControllers/postContactMessage");
const { validateMessage } = require("./messageSchema");

const postMessage = async (req, res) => {
  try {
    const validation = validateMessage(req.body);

    if (!validation.success) {
      return res
        .status(400)
        .json({ error: validation.error.issues[0].message });
    }

    const response = await postContactMessage(validation.data);

    return res.status(201).json({ message: response });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = postMessage;
