const express = require('express')
const morgan = require('morgan')
const { db, Page, User } = require('./models');
const wikiRouter = require('./routes/wiki.js')
const usersRouter = require('./routes/users.js');
//const wikiPage = require('../views/wikipage.js');


const app = express()
app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}))
app.use(express.json())

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })


app.use('/wiki', wikiRouter)
app.use('/user', usersRouter)

app.get('/', (req, res, next) => {
  res.redirect('/wiki')
})

const connect = async () => {
  await db.sync({force: true})
}

connect()

app.listen(3000);
