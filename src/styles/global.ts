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
`