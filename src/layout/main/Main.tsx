import React from 'react';
import styled from "styled-components";
import photo from '../../images/photo.png'
import {Image} from "../../components/Image";
import {FlexWraper} from "../../components/FlexWraper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWraper>
                <div>
                    <span>Hi 👋,</span>
                    <h2>My name is Pavan MG</h2>
                    <h1>I build things for web</h1>
                </div>
                <Image src={photo}/>
            </FlexWraper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
`