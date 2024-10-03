import React, { useState } from 'react';
import {evaluate} from 'mathjs'

const Calculator = () => {

  // useing usestate hook
  const [data,setData] = useState("");
  const getValue = (event) => {
    console.log(event.target.value);
    setData(data.concat(event.target.value))
  };

  const Calculation= ()=>{
      // setData(eval(data).toString())

      // Replace eval() with a safer alternative
      // we use constructor
      // try {
      //   setData(Function('"use strict"; return (' + data + ')')().toString());
      // } catch (error) {
      //   setData('Error');
      // }

      try {
        setData(evaluate(data).toString());
        
      } catch (error) {
        setData('error')
      }


    };

  const Back = ()=>{
      setData(data.slice(0,-1))
  }

  const AllClear = () =>{
    setData(" ") 
  }

  return (
    <div className="mx-auto p-4 max-w-xs">
      <div className="mb-4 ">
        <input
          className="p-2 w-72 text-right bg-gray-200 rounded border-solid border-2 border-black"
          placeholder="0"
          value={data}
          readOnly
        />

      </div>
      <div className="grid grid-cols-4 gap-2 border-solid border-2 border-black rounded p-2">
        <button
          className="p-5 bg-gray-400 rounded transition duration-300 ease-in-out hover:bg-white"
          onClick={getValue}
          value="("
        >
          (
        </button>
        <button
          className="p-5 bg-gray-400 rounded transition duration-300 ease-in-out hover:bg-white"
          onClick={getValue}
          value=")"
        >
          )
        </button>
        <button
          className="p-5 bg-gray-400 rounded transition duration-300 ease-in-out hover:bg-white"
          onClick={getValue}
          value="%"
        >
          %
        </button>
        <button
          className="p-5 bg-red-500 text-white rounded transition duration-300 ease-in-out hover:bg-white hover:text-black"
          onClick={AllClear}
          
        >
          AC
        </button>

        <button
          className="p-5 bg-gray-200 rounded transition duration-300 ease-in-out hover:bg-black hover:text-white"
          onClick={getValue}
          value="7"
        >
          7
        </button>
        <button
          className="p-5 bg-gray-200 rounded transition duration-300 ease-in-out hover:bg-black hover:text-white"
          onClick={getValue}
          value="8"
        >
          8
        </button>
        <button
          className="p-5 bg-gray-200 rounded transition duration-300 ease-in-out hover:bg-black hover:text-white"
          onClick={getValue}
          value="9"
        >
          9
        </button><button
          className="p-5 bg-yellow-600 text-black rounded transition duration-300 ease-in-out hover:bg-yellow-100"
          onClick={getValue}
          value="*"
        >
          *
        </button>


        

        <button
          className="p-5 bg-gray-200 rounded transition duration-300 ease-in-out hover:bg-black hover:text-white"
          onClick={getValue}
          value="4"
        >
          4
        </button>
        <button
          className="p-5 bg-gray-200 rounded transition duration-300 ease-in-out hover:bg-black hover:text-white"
          onClick={getValue}
          value="5"
        >
          5
        </button>
        <button
          className="p-5 bg-gray-200 rounded transition duration-300 ease-in-out hover:bg-black hover:text-white"
          onClick={getValue}
          value="6"
        >
          6
        </button>

         <button
          className="p-5 bg-yellow-600 text-black rounded transition duration-300 ease-in-out hover:bg-yellow-100"
          onClick={getValue}
          value="-"
        >
          -
        </button>


        

        <button
          className="p-5 bg-gray-200 rounded transition duration-300 ease-in-out hover:bg-black hover:text-white"
          onClick={getValue}
          value="1"
        >
          1
        </button>
        <button
          className="p-5 bg-gray-200 rounded transition duration-300 ease-in-out hover:bg-black hover:text-white"
          onClick={getValue}
          value="2"
        >
          2
        </button>
        <button
          className="p-5 bg-gray-200 rounded transition duration-300 ease-in-out hover:bg-black hover:text-white"
          onClick={getValue}
          value="3"
        >
          3
        </button>
        <button
          className="p-5 bg-yellow-600 text-black rounded transition duration-300 ease-in-out hover:bg-yellow-100"
          onClick={getValue}
          value="+"
        >
          +
        </button>
        
        <button
          className="p-3 bg-gray-400 rounded transition duration-300 ease-in-out hover:bg-black hover:text-white"
          onClick={Back}
          
        >
          BACK
        </button>

        <button
          className="p-5 bg-gray-200 rounded transition duration-300 ease-in-out hover:bg-black hover:text-white"
          onClick={getValue}
          value="0"
        >
          0
        </button>

        <button
          className="p-5 bg-green-500 text-white rounded transition duration-300 ease-in-out hover:bg-green-700"
          onClick={Calculation}
          
        >
          =
        </button>

        <button
          className="p-5 bg-yellow-600 text-black rounded transition duration-300 ease-in-out hover:bg-yellow-100"
          onClick={getValue}
          value="/"
        >
          /
        </button>
      </div>
    </div>
  );
};

export default Calculator;
