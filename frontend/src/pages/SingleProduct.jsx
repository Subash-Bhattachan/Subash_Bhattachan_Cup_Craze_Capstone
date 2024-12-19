
import { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/productcontext";
import PageNavigation from "../components/PageNavigation";
import MyImage from "../components/MyImage";
import { Container } from "../styles/Container";
import FormatPrice from "../helpers/FormatPrice";
import AddToCart from "../components/AddToCart";
import CartAmountToggle from "../components/CartAmountToggle";



//const API = "http://localhost:5000/api/cups"
const API_SINGLE = "http://localhost:5000/api/cups/custom"; // To ensure custom route

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
  const { id } = useParams();

  // destrcuturing the properties 
  const { id: alias, name, company, price, description, stock, stars, reviews, image } = singleProduct;

  useEffect(() => {
    console.log(`${API_SINGLE}/${id}`)
    //console.log(`${API_SINGLE}?id=${id}`);
    //getSingleProduct(`${API_SINGLE}?id=${id}`);
    //getSingleProduct(id);
    getSingleProduct(`${API_SINGLE}/${id}`);
  }, [id]);

  console.log("Single product state:", singleProduct);

  if (isSingleLoading) {
    return <div className="page_loading">Loading......</div>
  }

  return (
    <Wrapper>
      <PageNavigation title={name} />
      <Container className="container">
        <div className="grid grid-two-column">

          <div className="product_images">
            <MyImage imgs={image} />

          </div>

          <div className="product-data">
            <h2>{name}</h2>

            <p>{reviews} reviews</p>
            <div className="product-data-price">

              <p>Price: <FormatPrice price={price} /></p>
              <p>{description}</p>
              <div className="product-data-info">
                <span> Featured : </span>
                <p>Brand: <span>{company}</span></p>
              </div>
              <hr />
              {stock > 0 && <AddToCart product={singleProduct} />}


            </div>
          </div>

        </div>

      </Container>
    </Wrapper >

  )
}

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
   
  }

  .product_images {
    display: flex;
    align-items: center;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;
export default SingleProduct;
