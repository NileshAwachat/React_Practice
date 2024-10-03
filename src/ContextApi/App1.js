// import './App.css'
import React, { createContext } from 'react'
import ChildA from './ChildA';

// what is context Api?
// create,provide,consumer
// how to use it?
// context api is used to share data between components without passing props down manually
// it is used when you have to share data between multiple components in your app
// is context api also problematic?

const abc = createContext();
const xyz = createContext();
function App(){
    const name = 'nilesh';
    const age = 23;
    return(
        <>

        <abc.Provider value = {name}>
            <xyz.Provider value = {age}>
            <ChildA/>
            </xyz.Provider>
        </abc.Provider>
        
        </>
    );
}
export default App;

export {abc,xyz};