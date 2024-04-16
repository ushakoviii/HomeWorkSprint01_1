import {createGlobalStyle} from "styled-components";
import {myTheme} from "./myTheme";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }
  body {
    background-color: ${myTheme.colors.bcgColor};
    font-family: Poppins, sans-serif;
    margin: 0 auto;
  }
`