const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage')
const { Page } = require("../models");
const wikipage = require('../views/wikipage');


module.exports = router

//retrieve all wiki pages
router.get('/', (req, res, next) => {
  res.send('get test')
})

//submit a new page to the DB
router.post('/', async (req, res, next) => {
  // res.json(req.body)

  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`

  try {
    const page = await Page.create({
      title: req.body.title,
      content: req.body.pagecontent
    });

    // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
    res.redirect('/');
  } catch (error) { next(error) }
});

//retrieve the 'add a page' from
router.get('/add', (req, res, next) => {
  res.send(addPage())
})


router.get('/:slug', async (req, res, next) => {
  try{
  //res.send(`hit dynamic route at ${req.params.slug}`);
  const findPage = await Page.findOne({
    where: {slug: req.params.slug}
});
  // res.send(wikipage(findPage, 'chiara'));
  res.json(findPage);
  }
  catch(err) {next(error)}
});
 