const express = require("express");
const app = express();
const port = 3000;

var cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");

const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://2295458:X4191mSgKbpiW66a@cluster0.7kgqken.mongodb.net/";

app.use(bodyParser.json());

app.get("/", (req, res) => {
  const client = new MongoClient(uri);
  async function run() {
    try {
      const database = client.db("mdb");
      const moviesdb = database.collection("moviesdb");
      const result = await moviesdb.find({}).toArray();
      console.log(result);
      res.send(result);
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
});

app.get("/movies/:imdbID", (req, res) => {
  const client = new MongoClient(uri);
  const imdbID = req.params.imdbID;
  async function run() {
    try {
      const database = client.db("mdb");
      const moviesdb = database.collection("moviesdb");
      const result = await moviesdb.findOne({ imdbID });
      console.log(result);
      res.send(result);
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
});

app.patch("/movies/:imdbID", async (req, res) => {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("mdb");
    const moviesdb = database.collection("moviesdb");

    const imdbID = req.params.imdbID;
    const existingMovie = await moviesdb.findOne({ imdbID });

    const updatedMovie = {
      ...existingMovie,
      ...req.body,
    };

    const result = await moviesdb.replaceOne({ imdbID }, updatedMovie);
    console.log(result);
    res.send(result);
  } catch (error) {
    console.error("Error updating movie:", error);
  } finally {
    await client.close();
  }
});

app.post("/", (req, res) => {
  console.log(req.body);
  const client = new MongoClient(uri);

  async function run() {
    try {
      const database = client.db("mdb");
      const moviesdb = database.collection("moviesdb");
      const result = await moviesdb.insertOne(req.body);
      console.log(result);
      res.send(result);
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
});

app.delete("/movies/:imdbID", (req, res) => {
  const client = new MongoClient(uri);

  async function run() {
    try {
      const database = client.db("mdb");
      const moviesdb = database.collection("moviesdb");

      const result = await moviesdb.deleteOne({
        imdbID: req.params.imdbID,
      });

      console.log(result);
      res.send(result);
    } finally {
      await client.close();
    }
  }

  run().catch(console.dir);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
