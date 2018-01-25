const db = require('../database')
const path = require('path')
const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === 'coverFile') {
      cb(null, 'src/assets/posters')
    } else {
      cb(null, 'src/assets/movie')
    }
  },
  filename: function (req, file, cb) {
    cb(null, req.body._id + path.extname(file.originalname))
  }
})

function insertDB (req) {

  var entry = {}
  entry._id = parseInt(req.body._id)
  entry.created_at = new Date(Date.now()).toISOString()
  entry.title = req.body.title
  entry.original_title = req.body.original_title
  entry.rate = parseInt(req.body.rate)
  entry.year = parseInt(req.body.year)
  entry.length = req.body.length
  entry.language = req.body.language
  entry.country = req.body.country
  entry.description = req.body.description
  entry.director = req.body.director
  entry.writer = req.body.writer
  entry.stars = req.body.stars
  entry.category = req.body.category
  entry.color = req.body.color == null ? '#a6a9b2' : req.body.color
  db.get().collection('movie').insertOne(entry, function (err) {
    if (err) {
      return true
    } else {
      return false
    }
  })
}

const upload = multer({
  storage: storage
}).fields([{name: 'coverFile', maxCount: 1}, {name: 'movie', maxCount: 1}])

module.exports = (req, res) => {
  upload(req, res, function (err) {
    console.log('REQ: ', req)
    if (err) {
      res.status(503).send(err)
    } else {
      const error = insertDB(req)
      if (error) {
        res.status(503).send(error)
      } else {
        res.status(200).send('MOVIE UPLOADED')
      }
    }
  })
}

