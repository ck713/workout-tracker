const path = require('path')
const router = require('express').Router()

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'), (err) => {
    if (err) throw err
  })
})

router.get('/workouts', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/workouts.html'), (err) => {
    if (err) throw err
  })
})

router.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/stats.html'), (err) => {
    if (err) throw err
  })
})

module.exports = router
