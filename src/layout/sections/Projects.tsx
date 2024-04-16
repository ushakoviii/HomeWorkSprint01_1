import React from 'react';
import styled from "styled-components";
import {FlexWraper} from "../../components/FlexWraper";
import {Project} from "../../components/Project";
import project1 from '../../images/projectPhoto/project1.png'
import project2 from '../../images/projectPhoto/project2.png'
import project3 from '../../images/projectPhoto/project3.png'
import project4 from '../../images/projectPhoto/project4.png'
import project5 from '../../images/projectPhoto/project5.png'
import project6 from '../../images/projectPhoto/project6.png'
import {StyledTitleSection} from "../../components/StyledTitleSection";
import { StyledSection } from '../../components/StyledSection';
import {StyledPSection} from "../../components/StyledPSection";
import {Container} from "../../components/Container";

export const Projects = () => {
    return (
        <StyledSection>
            <Container>
                <StyledTitleSection>Projects</StyledTitleSection>
                <StyledPSection>Things I’ve built so far</StyledPSection>
                <FlexWraper align={"center"} justify={"center"} wrap={"wrap"} gap={"50px"}>
                    <Project src={project1} title={"Project Tile goes here"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                             stack={"HTML , JavaScript, SASS, React"}
                    />
                    <Project src={project2} title={"Project Tile goes here"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                             stack={"HTML , JavaScript, SASS, React"}
                    />
                    <Project src={project3} title={"Project Tile goes here"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                             stack={"HTML , JavaScript, SASS, React"}
                    />
                    <Project src={project4} title={"Project Tile goes here"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                             stack={"HTML , JavaScript, SASS, React"}
                    />
                    <Project src={project5} title={"Project Tile goes here"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                             stack={"HTML , JavaScript, SASS, React"}
                    />
                    <Project src={project6} title={"Project Tile goes here"}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                             stack={"HTML , JavaScript, SASS, React"}
                    />
                </FlexWraper>
            </Container>
        </StyledSection>

    );
};
