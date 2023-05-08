import express, { json } from 'express'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(2222, err => {
  if (err) {
    return console.log(err)
  }

  console.log('server Ok')
})
