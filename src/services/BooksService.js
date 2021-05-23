const apiService = require('../apiService')

const retrieveVolumes = async function () {
  const response = await apiService.get('/volumes?q=search+terms')
  return response.data
}
const retrieveSpecificVolume = async function (volumeId) {

}
const deleteBook = async function () {

}
const favoriteBook = async function () {

}
const addBook = async function () {

}
const searchBooks = async function () {

}
module.exports = {
  retrieveVolumes,
  searchBooks,
  addBook,
  deleteBook,
  favoriteBook,
  retrieveSpecificVolume
}
