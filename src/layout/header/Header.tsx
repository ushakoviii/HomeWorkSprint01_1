import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import Icon from "../../components/Icon";
import {IconContact} from "../../components/IconContact";
import IconLogoColor from "../../components/IconLogoColor";


export const Header = () => {
    return (
        <StyledHeader>
            <IconLogoColor/>
            <div>
                <Menu/>
                <IconContact/>
            </div>
        </StyledHeader>
    );
};
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`



