import React, { useState } from "react";



// #interview question
// How to get input vlaue ?
// How to get input value in react also make it in uppercase




function App() {
  const [x, setx] = useState("hii");
  const [y, sety] = useState("hii");
  function handlechange(e) {
    // // console.log(e.target.value);
    // const Upp = e.target.value.toUpperCase();
    // setx(Upp);

    if (e.target.name == "one") {
      const Upp = e.target.value.toUpperCase();
      setx(Upp);
    } else {
      sety(e.target.value);
    }
  }
  // function handlechange1(e) {
  //   // console.log(e.target.value);
  //   sety(e.target.value);
  // }
  return (
    <div>
      <form>
        <label>name:</label>
        <input type="text" name="one" value={x} onChange={handlechange} />
        <input type="text" name="two" value={y} onChange={handlechange} />
      </form>

      {x}
    </div>
  );
}

export default App;
