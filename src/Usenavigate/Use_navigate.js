import React from 'react'
import { useNavigate,Routes,Route } from 'react-router-dom'
import Nc from './Nc';



function App() {
const navigate=useNavigate();
    function handleclick(){
    
        navigate('/newcomponent')

    }
  return ( 
    <div>

        <button onClick={handleclick}>click</button>

        <Routes>
            <Route path='/newcomponent' element={<Nc/>}/>
        </Routes>
    </div>
  )
}

export default App
