import React from 'react'
import { kebabCase } from 'lodash'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  date,
  tags,
  title,
  image,
}) => {
  const PostContent = contentComponent || Content
  const hoge =
    '<p><img src="/img/chemex.jpg" alt="chemex"></p>\n<p>This week we’ll <strong>take</strong> a look at all the steps required to make astonishing coffee with a Chemex at home. The Chemex Coffeemaker is a manual, pour-over style glass-container coffeemaker that Peter Schlumbohm invented in 1941, and which continues to be manufactured by the Chemex Corporation in Chicopee, Massachusetts.</p>\n<p>In 1958, designers at the <a href="https://www.spacefarm.digital">Illinois Institute of Technology</a> said that the Chemex Coffeemaker is <em>"one of the best-designed products of modern times"</em>, and so is included in the collection of the Museum of Modern Art in New York City.</p>\n<h2>The little secrets of Chemex brewing</h2>\n<p>The Chemex Coffeemaker consists of an hourglass-shaped glass flask with a conical funnel-like neck (rather than the cylindrical neck of an Erlenmeyer flask) and uses proprietary filters, made of bonded paper (thicker-gauge paper than the standard paper filters for a drip-method coffeemaker) that removes most of the coffee oils, brewing coffee with a taste that is different than coffee brewed in other coffee-making systems; also, the thicker paper of the Chemex coffee filters may assist in removing cafestol, a cholesterol-containing compound found in coffee oils. Here’s three important tips newbies forget about:</p>\n<ol>\n<li>Always buy dedicated Chemex filters.</li>\n<li>Use a scale, don’t try to eyeball it.</li>\n<li>Never skip preheating the glass.</li>\n<li>Timing is key, don’t forget the clock.</li>\n</ol>\n<p>The most visually distinctive feature of the Chemex is the heatproof wooden collar around the neck, allowing it to be handled and poured when full of hot water. This is turned, then split in two to allow it to fit around the glass neck. The two pieces are held loosely in place by a tied leather thong. The pieces are not tied tightly and can still move slightly, retained by the shape of the conical glass.</p>\n<p>For a design piece that became popular post-war at a time of Modernism and precision manufacture, this juxtaposition of natural wood and the organic nature of a hand-tied knot with the laboratory nature of glassware was a distinctive feature of its appearance.</p>'
  // console.log(hoge)

  return (
    <section className="section w-5/6 mx-auto">
      {tags && tags.length ? (
        <div style={{ marginTop: '4rem' }}>
          <ul className="taglist">
            {tags.map((tag) => (
              <li key={`${tag}tag`}>
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              </li>
            ))}
            <p className="text-right">{date}</p>
          </ul>
        </div>
      ) : null}
      <div className="text-3xl mt-5">{title}</div>
      <h2>hogehoge</h2>
      <div className="mt-5">
        <div className="text-center">
          <img src={image.url} alt="カバー画像" className="w-96" />
        </div>
        <div className="text-left">
          {/* <PostContent content={content} /> */}
          {/* <PostContent content={hoge} /> */}
          <MDXRenderer>{content}</MDXRenderer>
        </div>
      </div>
    </section>
  )
}

const BlogPost = ({ data }) => {
  const { graphCmsPost } = data
  console.log(graphCmsPost.content.html)

  return (
    <Layout>
      <BlogPostTemplate
        content={graphCmsPost.content.markdownNode.childMdx.body}
        contentComponent={HTMLContent}
        date={graphCmsPost.date}
        tags={graphCmsPost.tags}
        title={graphCmsPost.title}
        image={graphCmsPost.coverImage}
      />
    </Layout>
  )
}
export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: ID!) {
    graphCmsPost(remoteId: { eq: $id }) {
      content {
        markdownNode {
          childMdx {
            body
          }
        }
      }
      coverImage {
        url
      }
      id
      date
      slug
      title
      tags
    }
  }
`
