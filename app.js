const express = require('express')
const morgan = require('morgan')

const routes = require('./routes')
const { environment } = require('./config/index')

const app = express();

app.set('view engine', 'pug')

app.use(morgan('dev'))
app.use(routes)

// catch unhandled request
app.use((req, res, next) => {
  const err = new Error('The requested page could not be found.')
  err.status = 404
  next(err)
})

// log error to database or print to console
app.use((err, req, res, next) => {
  if (environment === 'production') {
    // Log error to database (not set up yet.)
  } else {
    console.error(err)
  }

  next(err)
})

// display page-not-found page for 404's
app.use((err, req, res, next) => {
  if (err.status === 404) {
    res.status(404)
    res.render('page-not-found', {title: 'Page Not Found'})
  } else {
    next(err)
  }
})

//generic Server error
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  const isProduction = environment === 'production'
  res.render('error', {
    title: 'Server Error',
    message: isProduction ? null: err.message,
    stack: isProduction ? null : err.stack
  })
})

module.exports = app
