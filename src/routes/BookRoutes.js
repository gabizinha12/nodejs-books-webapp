const express = require('express')
const configs = require('../../configs.json')
const BookRoutes = express.Router()
const {
  retrieveVolumes,
  searchBooks,
  addBook,
  deleteBook,
  favoriteBook,
  retrieveSpecificVolume
} = require('../services/BooksService')
BookRoutes.get('/books', (req, res) => {
  retrieveVolumes().then(books => {
    console.log(books)
    res.status(200).send(books)
  })
})
BookRoutes.get('/books/:bookId', (req, res) => {
  const { bookId } = req.params
  retrieveSpecificVolume(bookId).then(bookVolume => {
    console.log(bookVolume)
    res.status(200).send(bookVolume)
  })
})
BookRoutes.post('/books/:shelfId', (req, res) => {
  const { shelfId } = req.params
  const token = configs.web.client_id
  console.log(req.params)
  deleteBook(shelfId, token).then(data => {
    console.log(data)
    res.status(200).send(data)
  }).catch(err => {
    console.error(err)
  })
})
BookRoutes.post('/books/:shelfId', (req, res) => {
  const { shelfId } = req.params
  const token = configs.web.client_id
  addBook(shelfId, token).then(data => {
    console.log(data)
    res.status(200).send(data)
  }).catch(err => {
    console.error(err)
  })
})
BookRoutes.get('/books', (req, res) => {
  const { volumeId } = req.query
  searchBooks(volumeId).then(volume => {
    console.log(volume)
  })
})
module.exports = BookRoutes
