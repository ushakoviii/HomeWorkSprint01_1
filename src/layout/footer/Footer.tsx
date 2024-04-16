import React from 'react';
import styled from "styled-components";
import {IconContact} from "../../components/IconContact";
import {Menu} from "../../components/menu/Menu";
import {Icon} from "../../components/Icon";
import {Container} from "../../components/Container";
import {FlexWraper} from "../../components/FlexWraper";
import {StyledGradientBox} from "../../components/StyledGradientBox";
import {myTheme} from "../../components/myTheme";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWraper direction={"column"} height={"180px"}>
                    <FlexWraper justify={"space-between"} align={"center"}>
                        <Icon iconId={"logoBlack"} width={"97"} height={"59"} viewBox={"0 0 97 59"}/>
                        <FlexWraper align={"center"} gap={"50px"}>
                            <StyledTextContact>+91 12345 09876</StyledTextContact>
                            <StyledTextContact>info@example.com</StyledTextContact>
                            <IconContact/>
                        </FlexWraper>
                    </FlexWraper>
                    <FlexWraper justify={"space-between"} align={"flex-end"}>
                        <Menu font={"DM Sans"} weight={"400"} size={"18px"}/>
                        <StyledGradientBox>
                            <StyledFooterText>Designed and built by&nbsp;</StyledFooterText><StyledGradientText>Pavan
                            MG&nbsp;</StyledGradientText><StyledFooterText>with&nbsp;</StyledFooterText><StyledGradientText>Love&nbsp;</StyledGradientText><StyledFooterText>&&nbsp;</StyledFooterText><StyledGradientText>Coffee</StyledGradientText>
                        </StyledGradientBox>
                    </FlexWraper>
                    <StyledDiv>
                    </StyledDiv>
                </FlexWraper>
            </Container>
        </StyledFooter>
    );
};
const StyledFooter = styled.footer`
  padding-bottom: 60px;
  
`
const StyledFooterText = styled.p`
  font-family: Poppins;
  font-weight: 400;
  font-size: 18px;
  color: ${myTheme.colors.mainColor}
`
const StyledGradientText = styled.p`
  font-family: Poppins;
  font-weight: 400;
  font-size: 18px;
  color: transparent;
`
const StyledTextContact = styled.p`
  font-family: "DM Sans";
  font-weight: 400;
  font-size: 18px;
  color: ${myTheme.colors.mainColor}
`
const StyledDiv = styled.div`
  display: flex;
  position: relative;
    &::before {
      content: "";
      display: block;
      width: 100%;
      color: #42446E;
      height: 2px;
      border-bottom: 2px solid;
      position: absolute;
      opacity: 30%;
      top: -70px;
  }
`