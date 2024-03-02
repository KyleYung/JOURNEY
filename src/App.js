import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Sites from './components/pages/Sites';
import Shop from './components/pages/Shop';
import Signup from './components/pages/Signup';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/sites' element={<Sites/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
