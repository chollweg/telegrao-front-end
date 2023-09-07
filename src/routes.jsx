import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from './pages/Home';
import Salas from './pages/Salas';

const Rotas = () => {
   return(
       <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/salas" element={<Salas />}/>
    </Routes>
       </BrowserRouter>
   )
}

export default Rotas;