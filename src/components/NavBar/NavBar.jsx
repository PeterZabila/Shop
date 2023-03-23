import React from 'react';
import { AppBar, ToolBar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/logo.jpeg';

import useStyles from './styles'

const NavBar = () => {
const classes = useStyles();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <ToolBar>
                    <Typography variant="h5" className={classes.title} color="inherit">
                        <img src={logo} alt="Shop" height="25px" className={classes.image} />
                        Shop
                    </Typography>
                </ToolBar>
                <div className={classes.grow}/>
                <div className={classes.button}>
                    <IconButton aria-label="SHow cart items" color="inherit">
                        <Badge badgeContent={2}>
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                </div>

            </AppBar>
        </>
    )
}

export default NavBar;s