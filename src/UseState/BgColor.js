import React, { useState } from 'react'

function BgColor() {
    let colors = [ "red", "blue", "green", "yellow", "purple" ]
    const [color,setcolor] = useState(0)

    function ColorChange() {
    //     if(color === colors.length){
    //         setcolor(0)
    //     }else{
    //         setcolor(color + 1)
    //     }
    

    setcolor(color === colors.length ? 0 : color+1 )
    }
  return (
    <div>
        <div style={{
            
            backgroundColor: colors[color],
        }}>
            <button onClick={ColorChange}>Change Color</button>
        </div>

    </div>
  )
}

export default BgColor