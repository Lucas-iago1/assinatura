const express = require('express')
const path = require('path')

require('dotenv').config()

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`))