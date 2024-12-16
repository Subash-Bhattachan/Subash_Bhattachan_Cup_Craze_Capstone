import React from 'react';
import HeroSection from "../components/HeroSection";
import Footer from '../components/footer';


const Home = () => {

  const data = {
    name: "Cup Craze",
  }
  return (
    <>
    <HeroSection myData={data} />
    
    </>
    
  )
};



export default Home;
