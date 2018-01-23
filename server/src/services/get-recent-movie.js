const db = require('../database')

module.exports = (req, res) => {
  /* descending sort by create time */
  const dateSort = {created_at: -1}

  /* number default value: 10 */
  const number = req.param('number') == null ? 10 : parseInt(req.param('number'))
  /* select just 4 column */
  db.get().collection('movie').find({}).project({_id: 1, title: 1, original_title: 1, year: 1, category: 1, color: 1, rate: 1}).sort(dateSort).limit(number).toArray(function (err, result) {
    if (err) throw err
    res.send(result)
  })
}
