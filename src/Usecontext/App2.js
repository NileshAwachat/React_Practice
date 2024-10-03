import React, { createContext } from "react";
import newchildA from "./NewChildA";



// what is usecontext hook ?
// create,provider,usecontext
// how to use it ?

const data = createContext();
const data1 = createContext();

function App2(){
const name = "nilesh"
const age = 25;
    
    return(
        <>
            <data.Provider value={name}>
                <data1.Provider value={age}>
                    <newchildA/>
                </data1.Provider>
                </data.Provider>       
        </>
)
}

export default App2;
export {data,data1}