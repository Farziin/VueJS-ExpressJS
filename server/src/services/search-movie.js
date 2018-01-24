const db = require('../database')

module.exports = (req, res) => {
  var regex = new RegExp('.*' + req.query.q + '.*', 'i')
  const query = {
    $or: [
      {original_title: regex},
      {title: regex}
    ]
  }
  db.get().collection('movie').find(query).toArray(function (err, result) {
    if (err) {
      console.log('ERROR IN RESPONDING SEARCH')
      res.status(503).send('CANNOT SEARCH')
      throw err
    }
    res.status(200).send(result)
  })
}
