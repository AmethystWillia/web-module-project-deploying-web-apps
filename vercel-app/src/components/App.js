import React from 'react';
import './App.css';
import { Route, Routes, useNavigate } from "react-router-dom";

import CharacterCard from './CharacterCard';
import Home from './Home';

import data from './data';

function App() {
  const navigate = useNavigate();

  const handleClick =(e, chara) => {
    e.preventDefault();
    navigate(`${chara.id}`);
  };

  return (
    <div className="App">
      <header>
        <h1>DanganRonpa V3 Cast</h1>
        <div>
        {data.map(chara => (
               <button onClick={e => handleClick(e, chara)} key={chara.id}>{chara.name}</button>
           ))}
        </div>
      </header>
      
      <Routes>
        <Route path='/:id' element={<CharacterCard/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
