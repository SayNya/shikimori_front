import * as React from 'react';
import {
    Routes,
    Route
} from "react-router-dom"
import Menu from "./layout/Menu";
import Footer from "./layout/Footer";
import MainPage from "./views/MainPage";

export default function Album() {
    return (
        <div>
            <Menu/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}
