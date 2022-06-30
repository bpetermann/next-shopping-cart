import { connectToDatabase } from '../../../lib/db-util';

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
    const userEmail = req.body.user;

    const newRating = {
      id: productId,
      rating: userRating,
      user: userEmail,
    };

    const db = client.db();

    const userRatingExists = await db.collection('ratings').findOne({
      user: userEmail,
      id: productId,
    });

    if (userRatingExists) {
      res.status(400).json({ message: 'Product was already rated!' });
      client.close();
      return;
    }

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
