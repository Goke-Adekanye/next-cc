import { MongoClient } from "mongodb";

export default async function Handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://jvstblvck:130404010@cluster0.beanb.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);

    client.close();
    res.status(201).json({ message: "Meetup successfully created" });
  }
}
