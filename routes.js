const express = require('express')

const { environment } = require('./config/index')
const router = express.Router();


router.get('/', (req, res) => {
  res.render('index', { title: 'Home' })
})

if (environment !== 'production') {
  router.get('/error-test', (req, res) => {
    throw new Error('This is a test error')
  })
}

module.exports = router
