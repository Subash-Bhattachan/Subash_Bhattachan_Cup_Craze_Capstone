import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from "../styles/Button";

const HeroSection = ({ myData}) => {
    const { name } = myData;
  return <Wrapper>
    <div className="container">
        <div className="grid grid-two-column">
            <div className="hero-section-data">
                <p className="intro-data">
                    Welcome to 
                </p>
            <h1> { name } </h1>
            <p>
            Cup Craze offers a wide range of unique, high-quality cups that cater to every style and preference, making it the perfect place for cup enthusiasts. With a focus on durable materials and creative designs, every cup is crafted to enhance your daily experience. By following Cup Craze, you'll stay updated on the latest collections and exclusive offers, ensuring you never miss out on something special. 
            Whether you're a collector or just looking for a functional yet stylish cup, Cup Craze has something for everyone at unbeatable prices.
            </p>
            <NavLink to="/products">
                <Button>Shop Now!</Button>
            </NavLink>

            </div>

            <div className="hero-section-image">
                <figure> 
                    <img src="./images/home-cup.png" alt="hero-section-photo" className="img-style" />
                </figure>
            </div>



        </div>

    </div>

  </Wrapper>
}
const Wrapper = styled.section`
  padding: 1rem 0;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .grid {
    display: grid;
    gap: 2rem;
    align-items: center;

    &.grid-two-column {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .hero-section-data {
    p {
      margin: 1rem 0;
      color: #555;
      
    }

    .intro-data {
       color: #4e9cdb;
      font-weight: bold;
      font-size: 25px;
      
    }

    h1 {
      font-size: 3rem;
      margin: 1rem 0;
      color: #333;
    }

    button {
      margin-top: 1rem;
    }
  }

  .hero-section-image {
    .hero-img {
      width: 100%;
      height: auto;
      border-radius: 10px;
    }
  }
`;

export default HeroSection;