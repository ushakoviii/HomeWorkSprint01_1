import React from 'react';
import styled from "styled-components";
import Icon from "../../components/Icon";
import {IconContact} from "../../components/IconContact";
import {Menu} from "../../components/menu/Menu";

export const Footer = () => {
    return (
        <StyledFooter>
            <div>
                <Icon iconId={"logoBlack"} width={"97"} height={"59"} viewBox={"0 0 97 59"}/>
                <div>
                    <p>+91 12345 09876</p>
                    <p>info@example.com</p>
                    <IconContact/>
                </div>
            </div>
            <div>
                <Menu/>
                <p>Designed and built by Pavan MG with Love & Coffee</p>
            </div>
        </StyledFooter>
    );
};
const StyledFooter = styled.footer`
`