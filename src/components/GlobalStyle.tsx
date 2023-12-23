import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }

  body {
    background-color: #191919;
  }
`