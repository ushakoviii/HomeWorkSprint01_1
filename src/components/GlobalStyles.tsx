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
  *::-webkit-scrollbar {
    width: 17px;
  }
  *::-webkit-scrollbar-track {
    background-color: ${myTheme.colors.secondColor};
  }
  *::-webkit-scrollbar-thumb {
    background-color: ${myTheme.colors.mainColor};
    border-radius: 5px;
    border: 2px solid ${myTheme.colors.secondColor}
  }
  *::-webkit-scrollbar-button {
    background-color: ${myTheme.colors.mainColor};
    border: 2px solid ${myTheme.colors.secondColor}
  }
  body {
    background-color: ${myTheme.colors.bcgColor};
    font-family: Poppins, sans-serif;
    margin: 0 auto;
  }
`