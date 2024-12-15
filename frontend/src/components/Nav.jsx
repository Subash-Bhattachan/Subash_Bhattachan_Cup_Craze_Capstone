import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { GiShoppingCart } from "react-icons/gi";
import { CgMenu, CgClose } from "react-icons/cg";

const Nav = () => {

    return (
        <NavWrapper>
            <div className='navbar'>
                <ul className='navbar-list'>
                    <li>
                        <NavLink to="/" className="navbar-link home-link">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="navbar-link home-link">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" className="navbar-link">Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="navbar-link">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart" className="navbar-link cart-trolley-link"><GiShoppingCart className="cart-trolley" />
                            <span className="cart-total-item"> 10 </span>
                        </NavLink>

                    </li>
                </ul>
                {/* two buttons for opening and closing the menu  */}
                <div className="mobile-navbar-btn">
                    <CgMenu name="menu-outline" className="mobile-nav-icon" />
                    <CgClose name="close-outline" className="mobile-nav-icon close-outline" />
                </div>
            </div>
        </NavWrapper>
    )
}


const NavWrapper = styled.nav`
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navbar-list {
    display: flex;
    gap: 2rem;
    list-style: none;
  }

  .navbar-link {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text || 'black'};
    font-size: 1.4rem;
    font-weight: 500;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.primary || 'blue'};
    }
  }
    .cart-trolley-link {
    position: relative;

    .cart-trolley {
    position: relative;
    font-size: 3.2rem;}
}

    .cart-total-item {
    width: 2.4rem;
    height: 2.4rem;
    position: absolute;
    background-color: lightblue;
    color: #000;
    border-radius: 50%;
    display: grid;
    place-items: center;
    top: -180%;
    left: 60%;
    background-color: ${({ theme }) => theme.colors.helper};
}

.mobile-navbar-btn {
display: none;
background-color: transparent;
cursor: pointer;
border: none;
}

.mobile-nav-icon[name="close-outline"] {
display: none;}

.close-outline {
display: none;
}


`;

export default Nav
