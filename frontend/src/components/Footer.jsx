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
  background-color: #f0f0f0;
  padding: 1rem 0;         

  .content {
    font-size: 15px;
    color: #333333;
    text-align: center;
  }
`;

export default Footer;
