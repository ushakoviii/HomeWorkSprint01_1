import React from 'react';
import styled from "styled-components";
import {myTheme} from "../myTheme";

type MenuPropsType = {
    font?: string;
    weight?: string;
    size?: string;
}
type StyledMenuPropsType = {
    font?: string;
    weight?: string;
    size?: string;
}
export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu font={props.font} weight={props.weight} size={props.size}>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Tech Stack</a>
                </li>
                <li>
                    <a href="">Projects</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav<StyledMenuPropsType>`
  font-family: ${props => props.font || "Poppins"};
  font-weight: ${props => props.weight || "500"};
  font-size: ${props => props.size || "20px"};
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;

    max-width: 610px;
  }

  a {
    color: ${myTheme.colors.mainColor};
    text-decoration: none;
  }
  li + li {
    margin-left: 50px;
  }
`