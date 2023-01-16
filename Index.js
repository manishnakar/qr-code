const express = require('express')
const qr = require('qr-image')
const app = express()

app.get('/qr', (req, res) => {
  const url = req.query.url
  if (!url) {
    return res.status(400).send('URL parameter is required')
  }

  const qr_svg = qr.image(url, { type: 'png' })
  res.type('png')
  qr_svg.pipe(res)
})

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
