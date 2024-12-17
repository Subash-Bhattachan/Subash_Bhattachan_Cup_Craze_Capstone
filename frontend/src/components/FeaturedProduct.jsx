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

        <div className="grid grid-three-columns">
        {featuredProducts.map((curElem) => {
          return<Product key={curElem.id} {...curElem} />
        })}
        </div>
      </div>
    </Wrapper>
  );
};


const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
    margin: auto;
  }

  .intro-data,
  .common-heading {
    text-align: center;
    margin-bottom: 2rem;
  }

  .grid {
    display: grid;
    gap: 2rem;
  }

  .grid-three-columns {
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }
`;

export default FeaturedProduct;
