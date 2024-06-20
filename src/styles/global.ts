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
    background-color: #C9EDDC;
    font-family: sans-serif;
    height: 100vh;
  }
`;
