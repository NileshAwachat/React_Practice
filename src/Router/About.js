import React from "react";
import { Link, useLocation } from "react-router-dom";


function About(){
    const location = useLocation();
    console.log(location.state);
    
    return(
    <>
        <div>This is About Page</div>
        <Link to="/Contact_0">Go TO Contact</Link><br/>
        <Link to="/">Go TO Home</Link><br/>
        <div><h1>my id is {location.state.id}</h1></div>
    </>
    )
}

export default About;