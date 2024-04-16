import styled from "styled-components";
import {myTheme} from "./myTheme";

export const StyledGradientBox = styled.div`
  display: flex;
  background-image: linear-gradient(to right, ${myTheme.colors.firstColorGradient}, ${myTheme.colors.secondColorGradient});
  -webkit-background-clip: text;
`