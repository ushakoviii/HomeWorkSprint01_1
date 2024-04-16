import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {IconContact} from "../../components/IconContact";
import {IconLogoColor} from "../../components/IconLogoColor";
import {Container} from "../../components/Container";
import {FlexWraper} from "../../components/FlexWraper";
import {myTheme} from "../../components/myTheme";


export const Header = () => {

    return (

        <StyledHeader>
            <Container>
                <FlexWraper justify={"space-between"} align={"center"}>
                    <IconLogoColor/>
                    <StyledMenu>
                        <Menu/>
                        <IconContact/>
                    </StyledMenu>
                </FlexWraper>
            </Container>
        </StyledHeader>

);
};
const StyledHeader = styled.header`
  padding: 40px 0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99999;
  background-color: ${myTheme.colors.bcgColor};
`
const StyledMenu = styled.div`
display: flex;
justify-content: start;
`



