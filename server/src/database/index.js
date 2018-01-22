const config = require('../config/config')
const mongodb = require('mongodb')
const url = config.db.options.host + ':' + config.db.options.port

const mongoClient = mongodb.MongoClient
var database = null
module.exports = {
  /* connect to database */
  async connect() {
    await mongoClient.connect(url, function (err, db) {
      if (err) throw err
      console.log('CONNECT TO DATABASE!')
      database = db.db(config.db.database)
      database.createCollection('movie', function (err) {
        if (err) throw err
        console.log('MOVIE COLLECTION CREATED!')
      })
      database.createCollection('comment', function (err) {
        if (err) throw err
        console.log('COMMENT COLLECTION CREATED!')
      })
      return database
    })
  },

  /*getter for database object*/
  get() {
    return database
  },

  /* insert data into database */
  /* insert () {
    const movies = [
      {
        _id: '',
        created_at: new Date(Date.now()).toISOString(),
        title: '',
        original_title: '',
        rate: '',
        year: '',
        length: '',
        language: '',
        country: '',
        description: '',
        director: ''
      }
    ]
    database.createCollection('movie', function (err, res) {
      if (err) throw err
      res.insertMany(movies, function (err, res) {
        if (err) throw err
        console.log('INSERTED ' + res.insertedCount + ' ROW INTO MOVIE COLLECTION!')
      })
    })
  }*/
}



