require("dotenv").config();
const app = require("./src/app");
const db = require("./src/db");
const PORT = process.env.PORT ?? 3001;

// db();
app.listen(PORT, () => {
  console.log(`Server on port:${PORT}`);
});
