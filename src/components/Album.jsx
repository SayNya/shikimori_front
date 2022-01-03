import * as React from 'react';
import {
    Routes,
    Route
} from "react-router-dom"
import Menu from "./layout/Menu";
import Footer from "./layout/Footer";
import MainPage from "./views/MainPage";
import AnimeDetail from "./views/AnimeDetail";
import {Container} from "@mui/material";

export default function Album() {
    return (

        <main>
            <Container sx={{py: 8}} maxWidth="md">
                <Menu/>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/anime/:slug" element={<AnimeDetail/>}/>
                </Routes>
                <Footer/>
            </Container>
        </main>
    );
}
