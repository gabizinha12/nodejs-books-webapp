const { google } = require('googleapis')
const axios = require('axios')
require('dotenv').config()

google.books({
  version: 'v1',
  auth: process.env.API_KEY
})
// Do the magic
const apiService = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1'
})
async function main () {
  const res = await apiService.get('/volumes?q="harry+potter"')
  console.log(res.data)
  // Example response
  // {
  //   "access": "my_access",
  //   "created": "my_created",
  //   "description": "my_description",
  //   "id": 0,
  //   "kind": "my_kind",
  //   "selfLink": "my_selfLink",
  //   "title": "my_title",
  //   "updated": "my_updated",
  //   "volumeCount": 0,
  //   "volumesLastUpdated": "my_volumesLastUpdated"
  // }
}

main().catch(e => {
  console.error(e)
  throw e
})
