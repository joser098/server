const getProjectsData = require("../../controllers/jxseControllers/getProjectsData");

const getProjects = async (req, res) => {
  try {
    const projects = await getProjectsData();

    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getProjects;
