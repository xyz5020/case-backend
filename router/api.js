/**
 * @router api
 * @name api.js
 * @author xuying
 */
const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const paperSchema = new mongoose.Schema({
  article_id: String,
  article_title: String,
  article_author: String
})

const meetingScheam = new mongoose.Schema({
  meeting_name: String,
  local: String
})

const paperModel = mongoose.model('Paper', paperSchema)
const meetingModel = mongoose.model('Meeting', meetingScheam)

router.get('/paper', async (req, res) => {
  const search = new RegExp(req.query.article_author, 'i')
  let result = await paperModel.find({article_author: search}).exec()
  res.send(result)
})

router.get('/meeting', async (req, res) => {
  let result = await meetingModel.find(req.query).exec()
  res.send(result)
})

module.exports = router
