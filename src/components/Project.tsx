import React from 'react';
import styled from "styled-components";
import {Image} from "./Image";
import {StyledLinkProject} from "./StyledLinkProject";
import {myTheme} from "./myTheme";

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
            <ProjectTitle>{props.title}</ProjectTitle>
            <ProjectText>{props.text}</ProjectText>
            <StyledStackText>
                <StyledTechStack weight={"400"} size={"16px"}>Tech stack:&nbsp;</StyledTechStack>
                <StyledTechStack weight={"300"} size={"14px"}>{props.stack}</StyledTechStack>
            </StyledStackText>
            <StyledLinkProject/>
        </StyledProject>
    );
};

const StyledProject = styled.div`
  background-color: #363636;
  width: 375px;
  height: 570px;
  border-radius: 20px 20px 20px 20px;
  margin-bottom: 65px;
`
const StyledStackText = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  padding: 0px 30px;
`
const ProjectTitle = styled.h3`
  color: ${myTheme.colors.thirdColor};
  display: flex;
  justify-content: start;
  padding: 0px 30px;
  margin-top: 25px;
  font-family: Poppins;
  font-weight: 500;
  font-size: 28px;
`

const ProjectText = styled.p`
  color: ${myTheme.colors.thirdColor};
  display: flex;
  justify-content: start;
  padding: 0px 30px;
  margin-top: 15px;
  font-family: Poppins;
  font-weight: 300;
  line-height: 26px;
  font-size: 18px;
`
type StyledTechStackPropsType = {
    weight: string;
    size: string;
}
const StyledTechStack = styled.p<StyledTechStackPropsType>`
  font-family: Poppins;
  font-weight: ${props => props.weight};
  line-height: 26px;
  font-size: ${props => props.size};
  color: ${myTheme.colors.thirdColor};
`
