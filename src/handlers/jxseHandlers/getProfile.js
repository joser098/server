const getProfileData = require("../../controllers/jxseControllers/getProfileData");

const getProfile = async (req, res) => {
  try {
    const profile = await getProfileData();

    return res.status(200).json(profile);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getProfile;
