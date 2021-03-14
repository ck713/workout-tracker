const router = require('express').Router()
const Workout = require('../models/workout')

router.get('/api/workouts', (req, res) => {
  Workout.getLastWorkout()
    .then((dbWorkout) => {
      res.json(dbWorkout)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
})
router.put('/api/workouts/:id', (req, res) => {
  Workout.addExercise(
    { _id: req.params.id },
    { $push: { exercises: req.body } }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
})

router.post('/api/workouts', ({ body }, res) => {
  Workout.createWorkout(body)
    .then((dbWorkout) => {
      res.json(dbWorkout)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
})

router.get('/api/workouts/range', (req, res) => {
  Workout.getWorkoutsInRange({})
    .limit(5)
    .then((dbWorkout) => {
      res.json(dbWorkout)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
})
module.exports = router
