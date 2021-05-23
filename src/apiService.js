const axios = require('axios')
const apiService = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1'
})

module.exports = apiService
