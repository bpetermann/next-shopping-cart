// Development only
import fs from 'fs';
import path from 'path';

export function buildFeedbackPath() {
  return path.join(process.cwd(), 'data', 'product-ratings.json');
}

export function extractFeedback(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

function handler(req, res) {
  if (req.method === 'POST') {
    const productId = req.body.id;
    const userRating = req.body.rating;

    const newRating = {
      id: productId,
      rating: userRating,
    };

    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    data.push(newRating);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res
      .status(201)
      .json({ message: 'Your rating was stored', rating: newRating });
  }
}

export default handler;
