import React from 'react';
import styled from "styled-components";
type ImagePropsType = {
    src: string;
}
export const Image = (props: ImagePropsType) => {
    return (
        <StyledPhoto src={props.src} alt={"MyPhoto"}/>
    );
};

const StyledPhoto = styled.img `
  z-index: 0;
  `