import React from 'react';
import CartItem from './CartItem/CartItem'
import { Container, Button, Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const Cart = ({cart}) => {
    const classes = useStyles();

    const renderEmptyCart =() => (
        <Typography variant="subtitle1">
            You have no items in your cart. Why don't you add something
        </Typography>
    );

    const renderFilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((lineItem) => (
                    <Grid item xs={12} sm={4} key={lineItem.id}> 
                        <CartItem item={lineItem}/>
                    </Grid>
                    
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">
                    Subtotal: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
                    <Button className={classes.checkoutButton} size="large" type="primary" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    );

    if(!cart.line_items) return 'Loading...';

  return (
    <Container>
        <div className={classes.toolbar}/>
        <Typography className={classes.title} variant="h3">Your Shopping Cart</Typography>
        { !cart.subtotal ? renderEmptyCart : renderFilledCart() }
    </Container>
  )
}

export default Cart
