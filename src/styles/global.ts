import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {  
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: sans-serif;
  }

  button {
    background: transparent;
    cursor: pointer;
    border: none;
  }

  body {
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
    transition: all .5s;
    width: 100%;
  }

  h1 {
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.colors.whiteColor}; 
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ::-webkit-scrollbar {
    width: .6rem;
  }
  
  ::-webkit-scrollbar-track {
    background: none;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.thirdColor};
    border-radius: 10px;
  }

  ::-webkit-input-placeholder {
      color: ${({ theme }) => theme.colors.textColorPrincipal};
  }

  :-moz-placeholder { /* Firefox 18- */
      color: ${({ theme }) => theme.colors.textColorPrincipal};
  }

  ::-moz-placeholder {  /* Firefox 19+ */
      color: ${({ theme }) => theme.colors.textColorPrincipal};
  }

  :-ms-input-placeholder {  
      color: ${({ theme }) => theme.colors.textColorPrincipal};
  }
`