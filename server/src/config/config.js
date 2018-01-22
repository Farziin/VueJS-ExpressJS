module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'movie-database',
    options: {
      host: process.env.HOST || 'mongodb://localhost',
      port: process.env.DB_PORT || '27017'
    }
  }
}
