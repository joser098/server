const path = require("path");

module.exports = (req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, "..", "public", "notFound.html"));
};
