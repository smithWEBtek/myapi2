process.env.NODE_ENV = process.env.NODE_ENV || 'development'
CAT_API_KEY = process.env.CAT_API_KEY

const environment = require('./environment')

module.exports = environment.toWebpackConfig()
