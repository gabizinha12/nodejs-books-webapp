const apiService = require('../apiService')

const retrieveVolumes = async function (searchTerms) {
  const response = await apiService.get(`/volumes?q=${searchTerms}`)
  return response.data
}
const retrieveSpecificVolume = async function (volumeId) {
  const response = await apiService.get(`/volumes/${volumeId}`)
  return response.data
}
const deleteBook = async function (shelfId, token) {
  const response = await apiService.post(`/mylibrary/bookshelves/${shelfId}/removeVolume`)
  return response.data
}
const favoriteBook = async function () {

}
const addBook = async function (shelf, token) {
  const response = await apiService.post(`mylibrary/bookshelves/${shelf}/addVolume`)
  return response.data
}
const searchBooks = async function (volumeId) {
  const response = await apiService.get(`/volumes/${volumeId}`)
  return response.data
}
module.exports = {
  retrieveVolumes,
  searchBooks,
  addBook,
  deleteBook,
  favoriteBook,
  retrieveSpecificVolume
}
