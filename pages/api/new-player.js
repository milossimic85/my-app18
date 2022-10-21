import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    console.log("did");
    const data = req.body;

    const { name, image, age, team } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://milos85:0628145401@cluster0.kguzqz1.mongodb.net/playersretryWrites=true&w=majority"
    );
    const db = client.db();

    const playersCollection = db.collection("players");

    const result = await playersCollection.insertOne(data);

    console.log(result);

    client.close();
    res.status(201).json({ message: "Did" });
  }
}

export default handler;
