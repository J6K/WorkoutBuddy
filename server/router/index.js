const router = require('express').Router();

router.use('/users', require('../db/Users/UserRouter'));
router.use('/cities', require('../db/City/CityRouter'));
router.use('/friends', require('../db/Friends/FriendRouter'));
router.use('/accomplishments', require('../db/Accomplishments/AccomplishmentRouter'));
// router.use('/workouts', require('../db/Workout/WorkoutRouter'));
router.use('/reviews', require('../db/Reviews/ReviewRouter'));
<<<<<<< HEAD
router.use('/messages', require('../db/Messages/MessageRouter'));
=======
>>>>>>> e9a0c7dca2878cadeddfc99e8af0c7562815c099

module.exports = router;
