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
        
        <div className="common-heading">Our Featured Best Sellers!</div>
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
  padding: 2rem 4rem;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 140rem;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 0.1rem; /* Reduced gap to bring images closer together */
    padding: 0 1rem; /* Increased left and right padding */
    justify-content: center;

    @media (max-width: 768px) {
      padding: 0 4rem; /* Reduced padding for smaller screens */
      flex-direction: column; /* Stack items on smaller screens */
    }
  }

 
  .common-heading {
  font-size: 2rem;
  color: red;
  padding-top: 1rem;
  padding-bottom: 1.2rem;
  
  }

  figure {
    width: auto;
    margin: 0;
    display: flex;
    margin-bottom: 20px;
    
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
      transition: width 0.2s linear;
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
      transition: transform 0.3s ease;
    }


  }
`;


export default FeaturedProduct;