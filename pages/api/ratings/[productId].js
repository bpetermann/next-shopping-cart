import { buildFeedbackPath, extractFeedback } from './index';

function handler(req, res) {
  const feedbackId = req.query.productId;
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);

  const selectedFeedback = feedbackData.filter(
    (feedback) => feedback.id === feedbackId
  );
  const userRatings = Object.keys(selectedFeedback).length;

  const averageRating =
    selectedFeedback.reduce((sum, { rating }) => sum + rating, 0) / userRatings;

  const userRating = {
    average: Math.ceil(averageRating),
    userRatings: userRatings,
  };

  res.status(200).json({ rating: userRating });
}

export default handler;
