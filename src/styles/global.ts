import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    background: #000;
    
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
    width: 100%;
    background: #000;
  }

  h1 {
    width: 100%;
    margin: 50px 0;
    text-align: center;
    color: #fff 
  }
`
/*${props => props.theme.colors.black};*/