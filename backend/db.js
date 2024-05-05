
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://chainware:chainware%402001@chainware.sr2olto.mongodb.net/servicecraft?retryWrites=true&w=majority&appName=chainware";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
// const dbName = "servicecraft";
// const collectionName = "jobs";

// // Create references to the database and collection in order to run
// // operations on them.
// const database = client.db(dbName);
// const collection = database.collection(collectionName);

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
// run().catch(console.dir);

module.exports = run;
