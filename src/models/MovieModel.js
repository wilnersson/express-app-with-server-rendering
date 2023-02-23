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
  durationInMinutes: {
    type: Number,
    required: false,
    min: 1,
    max: 500
  }
}, {
  timestamps: true,
  toObject: {
    virtuals: true,
    /**
     * Transformation to perform when going from document to POJO.
     *
     * @param {object} doc - The original document.
     * @param {object} ret - The resulting POJO.
     */
    transform: (doc, ret) => {
      delete ret.__v
      delete ret._id
    }
  }
})

schema.virtual('id').get(function () {
  return this._id.toHexString()
})

export const MovieModel = mongoose.model('Movie', schema)
