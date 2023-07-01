import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Character from "./componets/Character";
import {Login} from "./componets/Login";
import Inicio from "./componets/Inicio";

function App() {

  return (
    <div className="App">
      <div className="container">
        <h2>Rick and Morty App</h2>
        <div class="main">
            <div className="main_container">
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Login></Login>}></Route>
                <Route path='/Home' element={
                  <div className="items">
                      <Inicio></Inicio>
                </div>
                }></Route>
                <Route path='/Character/:id' element={<Character></Character>}></Route>
              </Routes>
            </BrowserRouter>
            </div>
        </div>
    </div>
          
    </div>
  );
}

export default App;
