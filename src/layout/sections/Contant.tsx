import React from 'react';
import {StyledSection} from "../../components/StyledSection";
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWraper} from "../../components/FlexWraper";
import {myTheme} from "../../components/myTheme";
import {StyledGradientBox} from "../../components/StyledGradientBox";

export const Contant = () => {
    return (
        <StyledSection>
            <Container>
                <FlexWraper align={"center"} direction={"column"}>
                    <StyledTitleContact>For any questions please mail me:</StyledTitleContact>
                    <StyledGradientBox>
                        <StyledTextContact>hi@pavanmg.in</StyledTextContact>
                    </StyledGradientBox>
                </FlexWraper>
            </Container>
        </StyledSection>
    );
};

const StyledTitleContact = styled.h3`
  font-size: 58px;
  font-family: Poppins;
  font-weight: 700;
  margin-top: 180px;
  color: ${myTheme.colors.thirdColor};
`
const StyledTextContact = styled.p `
  font-size: 58px;
  font-family: Poppins;
  font-weight: 700;
  margin-bottom: 200px;
  color: transparent;
`