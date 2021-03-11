const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage')
module.exports = router

//retrieve all wiki pages
router.get('/', (req, res, next) => {
  res.send('get test')
})

//submit a new page to the DB
router.post('/', (req, res, next) => {
  res.json(req.body)
})

//retrieve the 'add a page' from
router.get('/add', (req, res, next) => {
  res.send(addPage())
})
