import React from "react";
import { useRef } from "react";
function App() {
  const myrefobj = useRef();
  console.log(myrefobj);
  function handlesubmit(e) {
    e.preventDefault();
    console.log(myrefobj.current.value);
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <label>name:</label>
        <input type="text" name="one" ref={myrefobj} />
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;