import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    height: 100%;
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: ${({ theme }) => theme.background.primary};
    font-size: 1.6rem;
    font-family: 'Urbanist', sans-serif;

    * {
      margin: 0;
      padding: 0;
      font-family: 'Urbanist', sans-serif;
      letter-spacing: ${({ theme }) => theme.style.letterSpacing.global};
    }
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  #root {
    height: 100%;
  }
`;

export default GlobalStyle;
