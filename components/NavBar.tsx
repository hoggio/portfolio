import React from 'react';
import Link from 'next/link';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  MenuItem,
  Menu,
  Hidden,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import MyAvatar from './Avatar';
import Social from './Social';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  })
);

export default function MenuAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <div className={classes.root}>
            <MyAvatar />
          </div>
          <Hidden only={['xs', 'sm']}>
            <Link href="/about" passHref>
              <Button color="inherit">About</Button>
            </Link>
            <Link href="/portfolio" passHref>
              <Button color="inherit">Portfolio</Button>
            </Link>
            <Link href="/resume" passHref>
              <Button color="inherit">Resume</Button>
            </Link>
          </Hidden>
          <Hidden only={['md', 'lg', 'xl']}>
            <IconButton
              aria-controls="menu"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <div>
            <Social />
          </div>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <Link href="/about" passHref>
              <MenuItem onClick={handleClose}>About</MenuItem>
            </Link>
            <Link href="/portfolio" passHref>
              <MenuItem onClick={handleClose}>Portfolio</MenuItem>
            </Link>
            <Link href="/resume" passHref>
              <MenuItem onClick={handleClose}>Resume</MenuItem>
            </Link>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}