const recentMovies = require('./services/get-recent-movie')

module.exports = (app) => {
  /* tow routes for recent movie: with number and without number */
  app.get('/movie/recent/', recentMovies)
  app.get('/movie/recent/:number', recentMovies)
  
}
