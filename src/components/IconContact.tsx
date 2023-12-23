import React from 'react';
import Icon from "./Icon";
import styled from "styled-components";

export const IconContact = () => {
    return (
        <StyledIconContact>
            <Icon iconId={"contact1"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
            <Icon iconId={"contact2"} width={"31"} height={"31"} viewBox={"0 0 31 31"}/>
            <Icon iconId={"contact3"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
        </StyledIconContact>
    );
};
const StyledIconContact = styled.div `
display: flex;
gap: 20px;
`