const express = require('express')
const mongoose = require('mongoose')
const app = express()

const indexRouter = require('./router/index')

mongoose.connect('mongodb://mongo:27017/casedb', {useNewUrlParser: true});
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))

let entries = []
app.locals.entries = entries

app.use(express.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.use((req, res, next) => {
  console.log("In comes a " + req.method + " to " + req.url)
  next()
})

app.use('/', indexRouter)

// 404
app.use((req, res) => {
  res.status(404).send("404! Sorry can't find that!")
})

// error handling
app.use((err, req, res) => {
  console.log(err.stack)
  res.status(500).send("500! Server error")
})

app.listen(8085, () => { console.log('case-backend server starting') })
