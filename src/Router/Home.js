import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    // const navigate_0 = useNavigate();

    //passing the data with usenavidate hool 
    const any_name = 8;
    function gotoabout(){
        navigate("/About",{state : {id: any_name}})
    }
    function gotocontact(){
        navigate("/Contact_0")
    }
         
    return (
        <>
            <div> This is Home Page</div>
            {/* <Link to='/About'>OPen About</Link><br/>
            <Link to='/Contact_0'>OPen Contact</Link><br/> */}

            {/* with use of usenavigation */}

            <button onClick={gotoabout}>About</button>
            <button onClick={gotocontact}>Contact</button>
        </>

    )
}

export default Home