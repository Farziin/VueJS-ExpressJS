const recentMovies = require('./services/get-recent-movie')
const sendPoster = require('./services/send-poster')
const movieDetails = require('./services/get-movies-details')

module.exports = (app) => {
  /* tow routes for recent movie: with number and without number */
  app.get('/movie/recent/', recentMovies)
  app.get('/movie/recent/:number', recentMovies)

  /* get poster */
  app.get('/posters/:id', sendPoster)

  /* get movie details */
  app.get('/movie/:id/details', movieDetails)
}
