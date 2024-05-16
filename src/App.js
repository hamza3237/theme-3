// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Product from './pages/product/Product'
import Home from './pages/home/Home'
import SingleProduct from './pages/singleproduct/SingleProduct'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Product/>} />
          <Route path="/productdetail" element={<SingleProduct />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
