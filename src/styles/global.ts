import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.bg};
    height: 100vh;
    transition: background 1s ease;
    
    font-family: ${(props) => props.theme.font};
    font-weight: 400;
    font-style: normal;  
  }
`;

// ${(props) => props.theme.colors.bg};
