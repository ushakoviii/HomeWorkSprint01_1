import React from 'react';
import styled from "styled-components";
import photo from '../../images/photo.png'
import {Image} from "../../components/Image";
import {myTheme} from "../../components/myTheme";
import {Container} from "../../components/Container";
import {FlexWraper} from "../../components/FlexWraper";
import {StyledGradientBox} from "../../components/StyledGradientBox";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWraper align={"center"} justify={"space-between"} wrap={"wrap"}>
                    <div>
                        <StyledSpan>Hi 👋,</StyledSpan>
                        <StyledH2>My name is</StyledH2>
                        <StyledGradientBox>
                            <StyledH2 color={"transparent"}>Pavan MG</StyledH2>
                        </StyledGradientBox>
                        <StyledH1>I build things for web</StyledH1>
                    </div>

                    <PhotoWraper>
                        <Image src={photo}/>
                        <StyledRectangle></StyledRectangle>
                        <StyledRectangle2></StyledRectangle2>
                        <StyledRectangle3></StyledRectangle3>
                    </PhotoWraper>
                </FlexWraper>
            </Container>
        </StyledMain>
    )
        ;
};

const StyledMain = styled.div`
  display: flex;
  font-family: Poppins;
  font-weight: bold;
  line-height: 70px;
  min-height: 100vh;
  padding-top: 140px;
`
const StyledSpan = styled.span`
  color: ${myTheme.colors.secondColor};
  font-size: 58px;
`
type StyledH2PropsType = {
    color?: string,
}
const StyledH2 = styled.h2<StyledH2PropsType>`
  color: ${props => props.color || myTheme.colors.secondColor};
  font-size: 58px;
`
const StyledH1 = styled.h1`
  color: ${myTheme.colors.secondColor};
  font-size: 58px;
`
const PhotoWraper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 635px;
  height: 635px;
  background-image: linear-gradient(-45deg, transparent, #191919 65%);
  top: 0px;
  left: 700px;

  /*&::before {
    content: "";
    width: 444px;
    height: 444px;
    border: 1px solid ${myTheme.colors.mainColor};
    position: absolute;
    transform: rotate(105deg);
    z-index: -1;
  }
  &::after {
    content: "";
    width: 444px;
    height: 444px;
    border: 1px solid ${myTheme.colors.mainColor};
    position: absolute;
    transform: rotate(120deg);
    z-index: -1;
  }*/
`
const StyledRectangle = styled.div `
    
      &::before {
        content: "";
        width: 444px;
        height: 444px;
        border: 1px solid ${myTheme.colors.mainColor};
        position: absolute;
        z-index: -1;
        transform: rotate(105deg);
        right: 15%;
        top: 15%;
      }
      &::after {
        content: "";
        width: 444px;
        height: 444px;
        border: 1px solid ${myTheme.colors.mainColor};
        position: absolute;
        transform: rotate(120deg);
        z-index: -1;
        right: 15%;
        top: 15%;
    }
`
const StyledRectangle2 = styled.div `
    
      &::before {
        content: "";
        width: 444px;
        height: 444px;
        border: 1px solid ${myTheme.colors.mainColor};
        position: absolute;
        transform: rotate(135deg);
        z-index: -1;
        right: 15%;
        top: 15%;
      }
      &::after {
        content: "";
        width: 444px;
        height: 444px;
        border: 1px solid ${myTheme.colors.mainColor};
        position: absolute;
        transform: rotate(150deg);
        z-index: -1;
        right: 15%;
        top: 15%;
    }
`
const StyledRectangle3 = styled.div `
    
      &::before {
        content: "";
        width: 444px;
        height: 444px;
        border: 1px solid ${myTheme.colors.mainColor};
        position: absolute;
        transform: rotate(165deg);
        z-index: -1;
        right: 15%;
        top: 15%;
      }
    
`

