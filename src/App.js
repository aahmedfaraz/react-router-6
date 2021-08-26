import React, { Fragment } from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';
import { Home, About, NotFound, Products, ProductDetails, ProductsIndex } from './components';

const App = () => {
  return (
    <Fragment>
      <Router>
        <h1 title="This sentence is outside <Routes> | It will be appearing in every URL" >Ahmed Faraz</h1>
        <ul>
          <NavLink to="/" as="li">Home</NavLink>
          <NavLink to="about" as="li" title="This is NavLink">About</NavLink>
          <NavLink to="products" as="li" title="This is NavLink">Products</NavLink>
          <NavLink className="subOption" to="products/mobile" as="li" title="This is NavLink">Mobile</NavLink>
          <NavLink className="subOption" to="products/laptop" as="li" title="This is NavLink">Laptop</NavLink>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="products" element={<Products/>} >
            <Route path="/" element={<ProductsIndex />} />
            <Route path=":productID" element={<ProductDetails />} />
          </Route>
        </Routes>
      </Router>
    </Fragment>
  )
}

export default App;
