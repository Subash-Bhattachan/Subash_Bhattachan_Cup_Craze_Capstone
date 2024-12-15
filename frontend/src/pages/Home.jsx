import React from 'react';
import HeroSection from "../components/HeroSection";


const Home = () => {

  const data = {
    name: "Cup Craze",
  }
  return (
    
    <HeroSection myData={data} />
  )
};



export default Home;
