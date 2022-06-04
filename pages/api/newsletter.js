import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const newSubscription = {
      userEmail,
    };

    let client;
    try {
      client = await MongoClient.connect(
        `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@cluster0.gi0qz.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
      );
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database' });
      return;
    }

    const db = client.db();

    try {
      const result = await db
        .collection('newsletter')
        .insertOne(newSubscription);
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing message failed' });
      return;
    }

    client.close();

    res.status(201).json({
      message: "You're on the newsletter list!",
      subscription: newSubscription,
    });
  }
}

export default handler;
