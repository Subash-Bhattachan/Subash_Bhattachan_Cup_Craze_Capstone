import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }

  .container {
    max-width: 120rem;
    margin: 0 auto;
  }

  .grid {
    display: grid;
    gap: 9rem;
  }

  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);

  }

  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
  }

  .grid-four-column{
    grid-template-columns: 1fr 1.2fr .5fr .8fr ;
  }

  .grid-five-column{
    grid-template-columns: repeat(5, 1fr);
  }
`;
