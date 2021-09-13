const express = require('express')

const PORT = 3000
const app = express()

function handleRequest (req, res) {
  res.send('Hello!')
}

app.get('/', handleRequest)
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) })
