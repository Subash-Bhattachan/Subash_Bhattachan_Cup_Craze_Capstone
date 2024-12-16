import styled from "styled-components";
import { Button } from "../styles/Button"
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>404</h2>
          <h3>Page Not Found.</h3>
          <p>The page you are trying to access does not exist in the server.</p>
          <NavLink to="/">
            <Button>
              Go back to Home
            </Button>
          </NavLink>
        </div>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;

    h2 {
      font-size: 10rem;
    }

    h3 {
      font-size: 4.2rem;
    }

    p {
      margin: 2rem 0;
    }
  }
`;
export default ErrorPage
