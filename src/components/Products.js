import React from 'react'
import { Outlet } from 'react-router-dom';
import { useMatch } from 'react-router';

const Products = () => {
    console.log(useMatch('products'));
    return (
        <div>
            <h1>All the Products</h1>
            <hr />
            <Outlet/>
        </div>
    )
}

export default Products;
