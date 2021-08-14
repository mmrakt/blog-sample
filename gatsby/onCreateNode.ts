import { createFilePath } from 'gatsby-source-filesystem'

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // console.log(node)
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }
}
