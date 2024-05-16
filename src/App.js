// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Home from './pages/home/Home'
import SingleProduct from './pages/singleproduct/SingleProduct'
import Footer from './components/Footer'
import AllProduct from './pages/product/AllProduct';
const App = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/allprducts" element={<AllProduct/>} />
          <Route path="/productdetail" element={<SingleProduct />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
