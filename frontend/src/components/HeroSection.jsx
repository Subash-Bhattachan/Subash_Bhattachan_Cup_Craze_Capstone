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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem et, nostrum dolores at neque voluptates magnam provident ipsum, saepe eius, maxime iure placeat quisquam porro corporis pariatur veritatis itaque eos?
            </p>
            <NavLink>
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
  padding: 4rem 0;

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
      color: #ff5722;
      font-weight: bold;
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