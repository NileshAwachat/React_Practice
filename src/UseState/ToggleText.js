import React, { useState } from 'react'
function ToggleText() {
    const [showText, setShowText] = useState('off')
    function Toggle(){
    //     if (showText === 'off') {
    //         setShowText('on')
    //     }
    //     else {
    //         setShowText('off')
    // }
    setShowText(showText === 'off' ? 'on' : 'off')
}
  return (
    <>
    <button onClick={Toggle}>{showText}</button>
    </>
  )
}
export default ToggleText
