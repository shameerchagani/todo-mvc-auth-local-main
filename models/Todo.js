const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
  createDate: {
    type: Date,
    default: Date()
  }
})

module.exports = mongoose.model('Todo', TodoSchema)
