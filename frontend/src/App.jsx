import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";

import './App.css';
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {

  const theme = {
    colors: {
    bg: "beige",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    }
  }
  
  return (
    <ThemeProvider theme={theme}>
     <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>
      <Footer />
     </Router>
     </ThemeProvider>
      
    )
}

export default App
