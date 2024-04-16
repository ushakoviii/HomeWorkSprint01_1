import React from 'react';
import spritesvg from '../images/spritesvg.svg'
import styled from "styled-components";
type IconPropsType = {
    iconId: string;
    width: string;
    height: string;
    viewBox: string;
}
export const Icon = (props: IconPropsType) => {
    return (
        <StyledSvg width={props.width} height={props.height} viewBox={props.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${spritesvg}#${props.iconId}`}/>
        </StyledSvg>
    );
};
const StyledSvg = styled.svg `

`