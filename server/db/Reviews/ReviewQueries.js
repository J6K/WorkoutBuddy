import ReviewQuerySelectors from './ReviewQuerySelectors';
import db from '../';

let result;
let queryString;

export default class ReviewQueries extends ReviewQuerySelectors {
  constructor() {
    super();
  }

  fetchReviews(id) {
    queryString = super.getReviews(parseInt(id));
    result = db.query(queryString);
    return result;
  }

  postReviews(body) {
    // const query = {};
    // query['review'] = body.review;
    // query['rating'] = body.rating;
    // query['sender_id'] = parseInt(body.sender_id);
    // query['receiver_id'] = parseInt(body.receiver_id);
    // console.log('this is the query ', query)
    queryString = super.postReviews(body);
    result = db.query(queryString);
    return result;
  }
}
