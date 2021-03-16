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
        required: 'Distance',
      },
      duration: {
        type: Number,
        trim: true,
        required: 'Duration',
      },
      name: {
        type: String,
        trim: true,
        required: 'Exercise',
      },
      reps: {
        type: Number,
        trim: true,
        required: 'Reps',
      },
      sets: {
        type: Number,
        trim: true,
        required: 'Sets',
      },
      type: {
        type: String,
        trim: true,
        required: 'Type',
      },
      weight: {
        type: Number,
        trim: true,
        required: 'Weight',
      },
    },
  ],
})

// adds a dynamically-created property to schema
workoutSchema.virtual('totalDuration').get(function () {
  // "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration
  }, 0)
})

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = { Workout }