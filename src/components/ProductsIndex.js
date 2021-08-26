import React from 'react';
import { useNavigate } from 'react-router';

const ProductsIndex = () => {
    const navigate = useNavigate();
    return (
        <h2>
            Welcome to Products
            <br />
            <button onClick={() => {
                navigate('/about');
            }}>
                Goto Home
            </button>
        </h2>
    )
}

export default ProductsIndex;
