const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      distance: {
        type: String,
        trim: true,
        required: 'Enter distance',
      },
      duration: {
        type: Number,
        trim: true,
        required: 'Enter duration',
      },
      name: {
        type: String,
        trim: true,
        required: 'Enter exercise name',
      },
      reps: {
        type: Number,
        trim: true,
        required: 'Enter # of reps',
      },
      sets: {
        type: Number,
        trim: true,
        required: 'Enter # of sets',
      },
      type: {
        type: String,
        trim: true,
        required: 'Enter workout type',
      },
      weight: {
        type: Number,
        trim: true,
        required: 'Enter weight',
      },
    },
  ],
})

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout
