import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Menu from 'material-ui-popup-state/HoverMenu'
import MenuItem from '@material-ui/core/MenuItem'
import { bindMenu } from 'material-ui-popup-state/hooks'

const CourseMenu = (props) => {
  const { edges } = useStaticQuery(
    graphql`
      query allCoursePage {
        allGraphCmsPage {
          edges {
            node {
              slug
              title
            }
          }
        }
      }
    `
  ).allGraphCmsPage
  const { popupState } = props

  return (
    <>
      <Menu
        /* eslint-disable react/jsx-props-no-spreading */
        {...bindMenu(popupState)}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        {edges.map(({ node }) => (
          <Link to={node.slug} key={node.title}>
            <MenuItem>{node.title}</MenuItem>
          </Link>
        ))}
      </Menu>
    </>
  )
}

export default CourseMenu
