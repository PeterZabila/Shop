import React from 'react'
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

// const products = [
//     {id: 1, name: "Sneackers", description: "Running shoes", price: "$5"},
//     {id: 2, name: "Shoes", description: "Running", price: "$5"},
//     {id: 3, name: "Pants", description: "Running Pants", price: "$5"},
//     {id: 4, name: "Trousers", description: "Running Trousers", price: "$5"},
//     {id: 5, name: "T-shirt", description: "Running Blouse", price: "$7"},
//     {id: 6, name: "Blouse", description: "Running T-shirt", price: "$56"},
//     {id: 7, name: "Flip-flops", description: "Running Flip-flops", price: "$4"},
//     {id: 8, name: "Necklace", description: "Running Necklace", price: "$3"},
//     {id: 9, name: "Hat", description: "Running Hat", price: "$56"},
//     {id: 10, name: "Sweater", description: "Running shoes", price: "$87"},
//     {id: 11, name: "Jacket", description: "Running Jacket", price: "$9"},
//     {id: 12, name: "Coat", description: "Running Coat", price: "$90"}
// ]

const Products = ({products, onAddToCart}) => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {products.map(product => (
                    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart}/>
                    </Grid>
                    ))}
            </Grid>
        </main>
    ) 
}

export default Products;