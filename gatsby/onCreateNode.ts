import { GatsbyNode } from 'gatsby'
import { createFilePath } from 'gatsby-source-filesystem'

const onCreateNode: GatsbyNode['onCreateNode'] = ({
  node,
  getNode,
  actions,
}) => {
  const { createNodeField } = actions
  if (node.internal.type === 'ContetnfulPost') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

export default onCreateNode
