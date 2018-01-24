module.exports = (req, res) => {
  console.log('../assets/posters/' + req.params.id + '.jpg')
  res.sendFile(req.params.id + '.jpg', {root: '../server/src/assets/posters/'})
}
