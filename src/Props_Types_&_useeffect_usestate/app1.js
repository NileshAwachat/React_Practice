// import './App.css';
import { useState, useEffect } from 'react'


function App() {
  const [temp, setTemp] = useState(0);
  const [temp1, setTemp1] = useState(0);
  useEffect(() => {
    alert('I M UseEffect Hook')
  }, [temp])
  useEffect(() => {
    alert('I M UseEffect decrement')
  }, [temp1])


  // function handleClick() {
  //   setTemp(22)
  // }
  return (
    <>
      <h1>{temp}</h1>
      <h1>{temp1}</h1>
      <button onClick={() => setTemp(temp + 1)}> Increment </button>
      <button onClick={() => setTemp1(temp1 - 1)}>Decrement</button>
      {/* <button onClick={() => setTemp(0)}>Reset</button> */}
      <button onClick={() => { setTemp(0); setTemp1(0); }}>Reset</button>
    </>
  );
}

export default App;
