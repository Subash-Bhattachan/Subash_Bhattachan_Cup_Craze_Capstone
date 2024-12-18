import { useProductContext } from "../context/productcontext";
import styled from "styled-components";
import Product from "./Product";

const FeaturedProduct = () => {
  const { isLoading, featuredProducts } = useProductContext();
  console.log("Featured Products:", featuredProducts);


  // console.log(
  //   "~ file: FeaturedProduct.js, featuredProducts"
  // )

  if (isLoading) {
    return <div>......Loading</div>;
  }
  return (
    <Wrapper className="section">
      <div className="container">
        <div className="intro-data">Check Now!</div>
        <div className="common-heading">Our Best Sellers!</div>
        <div className="grid grid-three-column">
          {featuredProducts.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};


const Wrapper = styled.section`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap; 
    gap: 1.2rem; 
    padding: 0 8rem; 
    justify-content: center; 
    
  }

  figure {
    width: 23rem; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }

    &:hover::after {
      width: 100%;
    }

    &:hover img {
      transform: scale(1.2);
    }

    img {
      max-width: 100%;
      height: auto;
      transition: all 0.2s linear;
    }

    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
  }
`;

export default FeaturedProduct;