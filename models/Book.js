const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({

  title: {
    type: String,
    required: true
  },

  isbn: {
    type: String,
    required: true
  },

  author: {
    type: String,
    required: true
  },

  dateUpdated: {
    type: Date,
    default: Date.now
  }

});

module.exports = Book = mongoose.model('book', BookSchema);