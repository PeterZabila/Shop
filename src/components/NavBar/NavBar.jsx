import React from 'react';
import { AppBar, IconButton, Badge, Typography } from '@material-ui/core';
import ToolBar from '@material-ui/core/Toolbar';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/shop.jpg';

import { Link, useLocation } from 'react-router-dom';

import useStyles from './styles'

const NavBar = ({ totalItems }) => {
const classes = useStyles();
const location = useLocation();
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <ToolBar>
                    <Typography component={Link} to="/" variant="h5" className={classes.title} color="inherit">
                        <img src={logo} alt="Shop" height="45px" className={classes.image}/>
                        Shop
                    </Typography>
                <div className={classes.grow}/>
                {location.pathname === '/' && (
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                        </Badge>
                        </IconButton>
                    </div>
                )}
                </ToolBar>
            </AppBar>
        </>
    )
}

export default NavBar;