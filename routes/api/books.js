const express = require('express');
const router = express.Router();

const Book = require('../../models/Book');

// @Route           GET /api/books/
// @Description     Get all saved book
// @Access          Public
router.get('/', (req, res) => {
  Book.find()
    .then(book => res.status(200).json(book))
      .catch(err => res.status(404).json({message: "Error"}));
});

// @Route           GET /api/books/:id
// @Description     Get book by id
// @Access          Public
router.get('/:id', (req, res) => {
  Book.findById(req.params.id)
    .then(book => res.status(200).json(book))
      .catch(err => res.status(400).json({message: "Error"}))
});

// @Route           POST /api/books/
// @Description     Add new book to database
// @Access          Public
router.post('/', (req, res) => {
  Book.create(req.body)
    .then(book => res.status(201).json({message: "Added successfully"}))
      .catch(err => res.status(400).json({message: "Can not add book"}));
})

// @Route           DELETE /api/books/:id
// @Description     Delete book from database
// @Access          Public
router.delete('/:id', (req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(book => res.json({message: "Book successfully deleted!"}))
      .catch(err => res.status(404).json({message: "Can not delete book"}));
})

// @Route           PUT /api/books/:id
// @Description     Edit book info
// @Access          Public
router.put('/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.status(200).json({book, message: "Updated successfully"}))
      .catch(err => res.status(400).json({message: "Can not edit book"}));
})

module.exports = router;