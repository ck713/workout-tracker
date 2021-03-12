const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'Exercise name',
  },
  type: {
    type: String,
    trim: true,
    required: 'Exercise type',
  },
  weight: {
    type: Number,
    trim: true,
    required: 'Weight',
  },
  sets: {
    type: Number,
    trim: true,
    required: 'Sets',
  },
  reps: {
    type: Number,
    trim: true,
    required: 'Reps',
  },
  duration: {
    type: Number,
    trim: true,
    required: 'Duration (mins)',
  },
})

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout
