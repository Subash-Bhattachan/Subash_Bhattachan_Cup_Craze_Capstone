import React from 'react';
import HeroSection from "../components/HeroSection";
import Footer from '../components/footer';
import FeaturedProducts from '../components/FeaturedProduct';


const Home = () => {

  const data = {
    name: "Cup Craze",
  }
  return (
    <>
    <HeroSection myData={data} />
    <FeaturedProducts />
    
    </>
    
  )
};



export default Home;
