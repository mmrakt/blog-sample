require('ts-node').register()

exports.onCreateNode = require('./gatsby/onCreateNode').onCreateNode
exports.onCreateWebpackConfig =
  require('./gatsby/onCreateWebpackConfig').onCreateWebpackConfig
exports.createPages = require('./gatsby/createPages').createPages
