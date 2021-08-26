import React from 'react';
import { useResolvedPath } from 'react-router';

const About = () => {
    console.log(useResolvedPath(''));
    return (
        <h1>Now this is About</h1>
    )
}

export default About;