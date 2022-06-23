import { connectToDatabase, getAllDocuments } from '../../../lib/db-util';

async function handler(req, res) {
  const productId = req.query.productId;

  let client;
  try {
    client = await connectToDatabase();
  } catch (error) {
    res.status(500).json({ message: 'Could not connect to database' });
    return;
  }

  if (req.method === 'GET') {
    try {
      const documents = await getAllDocuments(client, 'ratings', { _id: -1 });
      const selectedRatings = documents.filter(
        (rating) => rating.id === productId
      );
      const userRatings = selectedRatings.length;

      const averageRating =
        selectedRatings.reduce((sum, { rating }) => sum + rating, 0) /
        userRatings;

      const userRating = {
        average: Math.ceil(averageRating),
        userRatings: userRatings,
      };

      res.status(200).json({ rating: userRating });
    } catch (error) {
      res.status(500).json({ message: 'Getting ratings failed.' });
    }
  }

  client.close();
}

export default handler;
