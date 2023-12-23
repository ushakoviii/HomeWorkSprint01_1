import React from 'react';
import styled from "styled-components";
import {Image} from "./Image";
import {StyledLinkProject} from "./StyledLinkProject";

type ProjectPropsType = {
    src: string;
    title?: string;
    text?: string;
    stack?: string;
}
export const Project = (props: ProjectPropsType) => {

    return (
        <StyledProject>
            <Image src={props.src}/>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <StyledStackText>
                <p>Tech stack:</p>
                <p>{props.stack}</p>
            </StyledStackText>
            <StyledLinkProject/>
        </StyledProject>
    );
};

const StyledProject = styled.div`
  background-color: #363636;
  max-width: 373px;
`
const StyledStackText = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 5px;
`
