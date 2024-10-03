import React from "react";
import {abc,xyz} from './App1';

function ChildC(){
    return(
        <>

        <abc.Consumer>{
                (name) =>{
                    return(
                        <xyz.Consumer>{
                            (age)=>{
                                return(
                                    <h1> my name is {name} and my age is {age}</h1>

                                )
                        }}
                           
                        </xyz.Consumer>
                    
                    )
                    
                }

            }

        </abc.Consumer>
        
        
        </>
    )

}

export default ChildC