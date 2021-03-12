const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: 'Exercise',
      },
      type: {
        type: String,
        trim: true,
        required: 'Type',
      },
      weight: {
        type: Number,
        trim: true,
        required: 'Weifght',
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
        required: 'Duration',
      },
    },
  ],
})

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout
