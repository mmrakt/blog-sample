import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
}))

const CourseAccordion: React.VFC = () => {
  const classes = useStyles()

  return (
    <div className="">
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <div className="">コース紹介</div>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>hoge</li>
            <li>fuga</li>
            <li>piyo</li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default CourseAccordion
