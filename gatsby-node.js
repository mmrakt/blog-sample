require('ts-node').register()

exports.onCreateNode = require('./gatsby/onCreateNode').onCreateNode
exports.onCreateWebpackConfig =
  require('./gatsby/onCreateWebpackConfig').onCreateWebpackConfig
exports.createPages = require('./gatsby/createPages').createPages

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type ContentfulPost implements Node {
      coverImage: ContentfulAsset
    }
  `
  createTypes(typeDefs)
}
