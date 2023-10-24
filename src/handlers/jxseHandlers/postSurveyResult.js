const postSurvey = require("../../controllers/jxseControllers/postSurvey");
const { validateSurvey } = require("./surveySchema");

const postSurveyResult = async (req, res) => {
  try {
    const validation = validateSurvey(req.body);

    if (!validation.success) {
      return res
        .status(400)
        .json({ error: validation.error.issues[0].message });
    }

    const response = await postSurvey(validation.data);

    return res.status(201).json({ message: response });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

module.exports = postSurveyResult;
