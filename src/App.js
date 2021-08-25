import React, { Fragment } from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

const App = () => {
  return (
    <Fragment>
      <Router>
        <ul>
          <Link to="/" as="li" title="This is Link">Home</Link>
          <NavLink to="about" as="li" title="This is NavLink">About</NavLink>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
        <h1>I am every where</h1>
      </Router>
    </Fragment>
  )
}

export default App;
