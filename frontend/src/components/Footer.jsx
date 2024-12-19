import React from 'react';
import styled from 'styled-components';
import { LiaCopyrightSolid } from "react-icons/lia";

const Footer = () => {
  return (
    <Wrapper>
      <p className="content"><LiaCopyrightSolid /> 2024-2025 Cup Craze. All Rights Reserved.</p>
    </Wrapper>
  )
}



const Wrapper = styled.section`
  /* Footer that stays at the bottom */
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: linear-gradient(
    45deg, 
    rgba(255, 255, 255, 0.3) 25%, 
    rgba(0, 0, 0, 0.1) 50%, 
    rgba(255, 255, 255, 0.3) 75%
  ); /* Transparent tape-like gradient */
  padding: 1rem 0;
  z-index: 10; /* Ensure footer is above other content */

  .content {
    font-size: 15px;
    color: #333333;
    text-align: center;
  }
`;


export default Footer;
