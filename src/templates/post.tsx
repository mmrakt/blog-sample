import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/common/Content'

export const PostTemplate = ({
  content,
  contentComponent,
  date,
  title,
  tags,
  coverImage,
}) => {
  const PostContent = contentComponent || Content
  const image = getImage(coverImage)

  return (
    <section className="bg-white p-10">
      <div className="">
        <p className="text-sm">
          <span className="text-lg">{date}</span>
        </p>
        <h1 className="text-3xl font-black mb-2 mt-0">{title}</h1>
        <p className="flex flex-wrap">
          {tags &&
            tags.map((tag) => (
              <Link to={`/tag/${tag.slug}`} key={tag.slug}>
                <span className="text-lg mb-3 mr-5 bg-gray-300 underline hover:bg-gray-200">
                  #{tag.title}
                </span>
              </Link>
            ))}
        </p>
      </div>
      {image && (
        <div className="mt-10">
          <GatsbyImage image={image} alt={`「${title}」のカバー画像`} />
        </div>
      )}
      <div className="mt-10">
        <div className="text-left leading-loose">
          <PostContent content={content} />
        </div>
      </div>
    </section>
  )
}

const BlogPost = ({ data }) => {
  const { contentfulPost } = data
  console.log(contentfulPost)

  return (
    <Layout>
      <PostTemplate
        content={contentfulPost.content.childMarkdownRemark.html}
        contentComponent={HTMLContent}
        date={contentfulPost.date}
        title={contentfulPost.title}
        tags={contentfulPost.tags}
        coverImage={contentfulPost.coverImage}
      />
    </Layout>
  )
}
export default BlogPost

export const pageQuery = graphql`
  query Post($id: String!) {
    contentfulPost(id: { eq: $id }) {
      content {
        childMarkdownRemark {
          html
        }
      }
      date(formatString: "YYYY.MM.DD")
      slug
      title
      tags {
        title
        slug
      }
      coverImage {
        gatsbyImageData
      }
    }
  }
`
