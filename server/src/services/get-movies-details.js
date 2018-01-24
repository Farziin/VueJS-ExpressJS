const db = require('../database')

module.exports = (req, res) => {
  const query = {_id: parseInt(req.params.id)}
  db.get().collection('movie').findOne(query, function (err, result) {
    if (err) {
      console.log('GET-MOVIE-DETAILS: ERROR IN FINDING MOVIE')
      throw err
    }
    res.send(result)
  })
}
