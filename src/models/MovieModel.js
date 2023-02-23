import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1
  },
  year: {
    type: Number,
    required: false,
    min: 1900,
    max: 2100
  },
  lengthInMinutes: {
    type: Number,
    required: false,
    min: 1,
    max: 500
  }
}, {
  timestamps: true
})

schema.virtual('id').get(() => {
  return this._id.toHexString()
})

export const MovieModel = mongoose.model('Movie', schema)
