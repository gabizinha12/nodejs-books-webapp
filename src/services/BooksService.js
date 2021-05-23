const axios = require('axios')
const apiBaseURL = 'https://www.googleapis.com/books/v1'

const retrieveVolumes = async function () {
  return await axios({
    method: 'get',
    url: apiBaseURL + '/volumes?q=search+terms',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
const retrieveSpecificVolume = async function (volumeId) {

}
const deleteBook = async function() {

}
const favoriteBook = async function() {

}
const addBook = async function() {

}
const searchBooks = async function() {
  
}
module.exports = {
  retrieveVolumes
}
