import styled from "styled-components";

type FlexWraperPropsType ={
    justify?: string;
    align?: string;
    wrap?: string;
    direction?: string;
    gap?: string;
    aligncontent?: string;
    height?: string;
}
export const FlexWraper = styled.div<FlexWraperPropsType>`
  display: flex;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  flex-wrap: ${props => props.wrap};
  height: ${props => props.height || "100%"};
  flex-direction: ${props => props.direction || "row"};
  gap: ${props => props.gap || "0px"};
  align-content: ${props => props.aligncontent};
  position: relative;
`