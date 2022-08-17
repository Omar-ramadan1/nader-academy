import React from 'react'
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Classroom from './Modules/Classroom/Classroom';
import Registeration from './Modules/Common/Navbar/Registeration/Registeration';
import Home from './Modules/Home/Home';
import Login from './Modules/Login/Login';

export default function RoutesContainer() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/registeration" element={<Registeration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/classroom" element={<Classroom />} />
    </Routes>
  </BrowserRouter>  )
}
