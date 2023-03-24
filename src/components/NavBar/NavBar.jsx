import React from 'react';
import { AppBar, IconButton, Badge, Typography } from '@material-ui/core';
import ToolBar from '@material-ui/core/Toolbar';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/shop.jpg';

import useStyles from './styles'

const NavBar = ({totalItems}) => {
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
                    <IconButton aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                </div>

            </AppBar>
        </>
    )
}

export default NavBar;