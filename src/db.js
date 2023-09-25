const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.0yhxkwz.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function conexion(db_name) {
  try {
    await client.connect();

    db = client.db(db_name);

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    return db;
  } catch (error) {
    console.log("Error de conexion con MongoDB:", error);
    throw Error;
  }
}

module.exports = conexion;
