import React from 'react';
import styled from "styled-components";
import {Icon} from "./Icon";


export const IconContact = () => {
    return (
        <StyledIconContact>
            <a href=""><Icon iconId={"contact1"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/></a>
            <a href=""><Icon iconId={"contact2"} width={"31"} height={"31"} viewBox={"0 0 31 31"}/></a>
            <a href=""><Icon iconId={"contact3"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/></a>
        </StyledIconContact>
    );
};
const StyledIconContact = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 50px;

`