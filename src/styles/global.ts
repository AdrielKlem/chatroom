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
    background-color: ${({ theme }) => theme.COLORS.BACK_002};
    transition: all .5s;
    width: 100%;
  }

  h1 {
    width: 100%;
    margin: 50px 0;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.WHITE}; 
  }
`