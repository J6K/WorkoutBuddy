import express from 'express';
import ReviewQueries from './ReviewQueries';

const router = express.Router();
const Review = new ReviewQueries();
let result;

router.get('/getReviews/:user_id', async (req, res) => {
  try {
    result = await Review.fetchReviews(req.params.user_id);
    res.status(200).send(result);
  } catch (error) {
    console.log('Error in getReviewsforUser route');
    res.status(500).send(error);
  }
});

router.post('/postReview', async (req, res) => {
  try {
    console.log('this is the req.body ', req.body)
    result = await Review.postReviews(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.log('Error in postReview route');
    res.status(500).send(error);
  }
});

module.exports = router;
