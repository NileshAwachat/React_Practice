import React, { useContext } from "react";
import {data,data1} from './App2';



function newChildC(){

    const fname = useContext(data);
    const Aage = useContext(data1);


    return(
        <>
        <h1> hi my name is {fname} and my age is {Aage}</h1>
        </>
    )
}

export default newChildC;