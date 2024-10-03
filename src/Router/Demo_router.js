import React from "react";
import {Routes,Route} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact_0";

// we can use useNavigation Hook other use of link.

// Routes, Route
function Demo_router(){
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Contact_0" element={<Contact/>} />
        </Routes>
    )
}

export default Demo_router;