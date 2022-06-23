import { connectToDatabase, getAllDocuments } from '../../../lib/db-util';

async function handler(req, res) {
  let client;
  try {
    client = await connectToDatabase();
  } catch (error) {
    res.status(500).json({ message: 'Could not connect to database' });
    return;
  }

  if (req.method === 'POST') {
    const productId = req.body.id;
    const userRating = req.body.rating;

    const newRating = {
      id: productId,
      rating: userRating,
    };

    const db = client.db();

    try {
      const result = await db.collection('ratings').insertOne(newRating);
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing message failed' });
      client.close();
      return;
    }

    res.status(201).json({
      message: 'Your rating was stored',
      rating: newRating,
    });
  }

  client.close();
}

export default handler;
