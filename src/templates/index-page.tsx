import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Img from 'gatsby-image'
import Layout from '../components/Layout'

export const IndexPage = () => {
  const image = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "sample.jpg" }) {
          id
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <div className="mt-5">
        <Img fixed={image?.file?.childImageSharp?.fluid} />
      </div>
    </Layout>
  )
}

export default IndexPage

// export const pageQuery = graphql`
//   query BlogPostByID($id: ID!) {
//     graphCmsPost(remoteId: { eq: $id }) {
//       content {
//         html
//       }
//       coverImage {
//         url
//       }
//       id
//       date
//       slug
//       title
//       tags
//     }
//   }
// `
