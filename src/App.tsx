import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter,Routes, Route, Outlet } from "react-router-dom";
import Login from './pages/auth/Login';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='login' element={<Login/>}  />

    </Routes>
    
    </BrowserRouter>

  );
}

export default App;
