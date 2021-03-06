const express = require('express')
const BookRoutes = require('./routes/BookRoutes')
require('dotenv').config()
const app = express()
app.use(BookRoutes)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.listen(3000, () => {
  console.log('Server is running at 3000')
})
