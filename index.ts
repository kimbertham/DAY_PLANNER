
require('dotenv').config()
import express from 'express'
import { json } from 'body-parser'
import mongoose from 'mongoose'

const dbURI = "mongodb://localhost/dayplanner-db"
const router = require('./routes/index')

const app = express()

mongoose.connect(
  `mongodb+srv://kimbertham:${process.env.MONGO_PASS}@cluster0.snum2.mongodb.net/dayplanner?retryWrites=true&w=majority`
,
  (err) => {
    if (err) return console.log(err)
    console.log('Mongo is Connected!')
  })

const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
  console.log("Connected successfully");
});


app.use(express.static(`${__dirname}/dist`))
app.use(json())
// app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))


app.use('/api', router)


app.listen(8000, () => {
  console.log('listening on port 8000')
})

