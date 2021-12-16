import React from 'react';
import './App.css';
import { Route, NavLink } from "react-router-dom";

//import CharacterCard from './CharacterCard';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <header>
        <h1>DanganRonpa V3 Cast</h1>
        <nav>
          <NavLink to='/kaede-akamatsu'>Kaede Akamatsu</NavLink>
          <NavLink to='/shuichi-saihara'>Shuichi Saihara</NavLink>
          <NavLink to='/miu-iruma'>Miu Iruma</NavLink>
          <NavLink to='/angie-yonaga'>Angie Yonaga</NavLink>
          <NavLink to='/gonta-gokuhara'>Gonta Gokuhara</NavLink>
          <NavLink to='/kokichi-ouma'>Kokichi Ouma</NavLink>
          <NavLink to='/k1-b0'>K1-B0</NavLink>
          <NavLink to='/kaito-momota'>Kaito Momota</NavLink>
          <NavLink to='/maki-harukawa'>Maki Harukawa</NavLink>
          <NavLink to='/ryoma-hoshi'>Ryoma Hoshi</NavLink>
          <NavLink to='/tenko-chabashira'>Tenko Chabashira</NavLink>
          <NavLink to='/himiko-yumeno'>Himiko Yumeno</NavLink>
        </nav>
      </header>
      
      <Route path='/'>
        <Home />
      </Route>
      {/* <Route path='/kaede-akamatsu'>
        <CharacterCard/>
      </Route> */}
    </div>
  );
}

export default App;
