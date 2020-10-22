const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use('/assets', express.static(`${__dirname}/public/assets`))
app.use('/', express.static(`${__dirname}/public/home`))
app.use('/contact', express.static(`${__dirname}/public/contact`))

app.get('/', (req, res) => {
  res.status(200)
})

app.get('/contact', (req, res) => {
  res.status(200)
  res.send('hello')
})

app.listen(port)