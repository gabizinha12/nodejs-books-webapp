const axios = require('axios')
const configs = require('../configs.json')
const apiService = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: configs.web.client_secret
  }
})

module.exports = apiService
