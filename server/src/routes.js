const recentMovies = require('./services/get-recent-movie')
const sendPoster = require('./services/send-poster')
const movieDetails = require('./services/get-movies-details')
const addComment = require('./services/add-comment')
const searchMovie = require('./services/search-movie')
const submitMovie = require('./services/submit-movie')

module.exports = (app) => {
  /* tow routes for recent movie: with number and without number */
  app.get('/movie/recent/', recentMovies)
  app.get('/movie/recent/:number', recentMovies)

  /* get poster */
  app.get('/posters/:id', sendPoster)

  /* get movie details */
  app.get('/movie/:id/details', movieDetails)

  /* insert comment */
  app.post('/movie/:id/comments', addComment)

  /* search movie in database */
  app.get('/search', searchMovie)

  /* upload and submit movie in website */
  app.post('/submit', submitMovie)
}
