import React from 'react'
import PropTypes from 'prop-types';
function App_child(props) {
    console.log(props);
    
  return (
    <div> {props.myCity}</div>
  )
}

App_child.propTypes={
    myCity:PropTypes.string
}
export default App_child