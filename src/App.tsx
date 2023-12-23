import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/main/Main";
import {Projects} from "./layout/sections/Projects";
import Stack from "./layout/sections/Stack";
import {Contant} from "./layout/sections/Contant";
import {Footer} from "./layout/footer/Footer";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Stack/>
            <Projects/>
            <Contant/>
            <Footer/>
        </div>
    );
}

export default App;
