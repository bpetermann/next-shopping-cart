import { connectToDatabase } from '../../lib/db-util';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, interestedIn } = req.body;
    if (!email || !email.includes('@')) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const newSubscription = {
      email,
      interestedIn,
    };

    let client;
    try {
      client = await connectToDatabase();
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
