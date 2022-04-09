require('ts-node').register()

exports.onCreateNode = require('./gatsby/onCreateNode').onCreateNode
exports.onCreateWebpackConfig =
  require('./gatsby/onCreateWebpackConfig').onCreateWebpackConfig
exports.createPages = require('./gatsby/createPages').createPages

// NOTE: 前postのconverImageがnullの場合に型推論エラーになるのでnullableにする
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type ContentfulPost implements Node {
      coverImage: ContentfulAsset
    }
  `
  createTypes(typeDefs)
}
