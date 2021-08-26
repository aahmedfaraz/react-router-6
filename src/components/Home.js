import React from 'react'
import { useLocation } from 'react-router';

const Home = () => {
    console.log(useLocation().pathname);
    return (
        <h1>This is Home</h1>
    )
}

export default Home;