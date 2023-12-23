import React from 'react';
import spritesvg from '../images/spritesvg.svg'
type IconPropsType = {
    iconId: string;
    width: string;
    height: string;
    viewBox: string;
}
export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width} height={props.height} viewBox={props.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${spritesvg}#${props.iconId}`}/>
        </svg>
    );
};

export default Icon;