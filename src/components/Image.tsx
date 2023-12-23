import React from 'react';
type ImagePropsType = {
    src: string;
}
export const Image = (props: ImagePropsType) => {
    return (
        <img src={props.src} alt={"MyPhoto"}/>
    );
};
