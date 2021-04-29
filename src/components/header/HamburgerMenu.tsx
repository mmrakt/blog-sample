import React from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  Theme,
  makeStyles,
  createStyles,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { Link } from 'gatsby'
import MENU_ITEM_LIST from '../../utils/menu-item-list'

const drawerWidth = 100

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
  })
)

const HamburgerMenu: React.VFC = () => {
  const [isOpened, setIsOpened] = React.useState<boolean>(false)
  const classes = useStyles()

  return (
    <>
      <button type="button" onClick={() => setIsOpened(!isOpened)}>
        <MenuIcon />
      </button>
      <Drawer anchor="right" open={isOpened} onClose={() => setIsOpened(false)}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={() => setIsOpened(false)}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {MENU_ITEM_LIST.map((item) => (
            <ListItem key={item.name}>
              <Link to={item.to}>
                <ListItemText>{item.name}</ListItemText>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}

export default HamburgerMenu
