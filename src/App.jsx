import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Tutor from './pages/Tutor';




function App(){
  return(
    <div>
      <Routes>
        <Route path='/' element ={<Home />}/>
        <Route path="/Tutor" element={<Tutor />}/>
      </Routes>
    </div>
  )
}

export default App;