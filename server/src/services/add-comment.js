const db = require('../database')

module.exports = (req, res) => {
  var comment = req.body
  comment.id = req.params.id
  if (comment.comment && comment.author && comment.director_rate && comment.acting_rate && comment.screenplay_rate && comment.select) {
    db.get().collection('comment').insertOne(comment, function (err) {
      if (err) {
        console.log('ERROR IN ADDING COMMENT', err)
        res.status(503).send('CANNOT INSERT COMMENT')
        throw err
      } else {
        console.log('COMMENT INSERTED')
        res.status(200).send('COMMENT INSERTED')
      }
    })
  } else {
    res.status(400).send('BAD REQUEST')
  }
}
