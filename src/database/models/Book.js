const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
  bookId: {
    type: String
  },
  AuthorName: {
    type: String
  }
})
module.exports = BookSchema
