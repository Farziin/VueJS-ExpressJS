const db = require('../database')

module.exports = (req, res) => {
  const query = {id: req.params.id}
  db.get().collection('comment').find(query).project({id: false}).toArray(function (err, result) {
    if (err) {
      console.log('GET-COMMENTS: ERROR IN FINDING COMMENTS')
      res.status(503).send('PROBLEM IN FINDING COMMENTS OCCURRED')
      throw err
    }
    res.status(200).send(result)
  })
}