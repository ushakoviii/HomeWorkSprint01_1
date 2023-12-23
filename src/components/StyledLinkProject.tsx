import React from 'react';
import Icon from "./Icon";
import styled from "styled-components";

export const StyledLinkProject = () => {
    return (
        <StyledLink>
            <div>
                <Icon width={"18"} height={"18"} viewBox={"0 0 18 18"} iconId={"link"}/>
                <a href={""}>Live Preview</a>
            </div>
            <div>
                <Icon width={"20"} height={"20"} viewBox={"0 0 20 20"} iconId={"link2"}/>
                <a href={""}>View Code</a>
            </div>
        </StyledLink>
    );
};
const StyledLink = styled.div `
  display: flex;
  justify-content: flex-start;
  gap: 120px;
`