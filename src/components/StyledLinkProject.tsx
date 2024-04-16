import React from 'react';
import styled from "styled-components";
import {Icon} from "./Icon";


export const StyledLinkProject = () => {
    return (
        <StyledLinks>
            <StyledLink>
                <Icon width={"18"} height={"18"} viewBox={"0 0 18 18"} iconId={"link"}/>
                <StyledLinkA href={""}>Live Preview</StyledLinkA>
            </StyledLink>
            <StyledLink>
                <Icon width={"20"} height={"20"} viewBox={"0 0 20 20"} iconId={"link2"}/>
                <StyledLinkA href={""}>View Code</StyledLinkA>
            </StyledLink>
        </StyledLinks>
    );
};
const StyledLinks = styled.div `
  display: flex;
  gap: 50px;
  padding: 0px 30px;
  margin-top: 20px;
`
const StyledLink = styled.div `
  display: flex;
  align-items: center;
`
const StyledLinkA = styled.a `
  font-family: Poppins;
  font-weight: 400;
  color: #FFFFFF;
  margin-left: 10px;
`