const router = require('express').Router();

router.use('/users', require('../db/Users/UserRouter'));
router.use('/accomplishments', require('../db/Accomplishments/AccomplishmentRouter'));
// router.use('/workouts', require('../db/Workout/WorkoutRouter'));

module.exports = router;
