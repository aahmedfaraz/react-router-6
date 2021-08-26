import React from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
    const { productID } = useParams();
    return (
        <div>
            <h1>This is Product [{productID}]</h1>
        </div>
    )
}

export default ProductDetails;
