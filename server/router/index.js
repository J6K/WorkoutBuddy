const router = require('express').Router();

router.use('/users', require('../db/Users/UserRouter'));
router.use('/cities', require('../db/City/CityRouter'));
router.use('/accomplishments', require('../db/Accomplishments/AccomplishmentRouter'));
// router.use('/workouts', require('../db/Workout/WorkoutRouter'));
router.use('/reviews', require('../db/Reviews/ReviewRouter'));

module.exports = router;
