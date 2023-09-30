const getProjectsData = require("../../controllers/jxseControllers/getProjectsData");

const getProjects = async (req, res) => {
  try {
    const projects = await getProjectsData();

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = getProjects;
