import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
  }
  html{
    font-size: 14px;
  }
  body{
    font-family: 'Roboto', sans-serif;
    background-color: ${(props) => props.theme.colors.background};
   
  }
  
  h3{
    font-weight: 700;
  }
  
  
`;

export default GlobalStyle;
