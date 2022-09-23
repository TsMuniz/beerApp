import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro'

function App() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route exact path="/" element={ <Login /> } />
      <Route path="/register" element={ <Cadastro /> } />
    </Routes>
  );
}

export default App;
document.getElementById('root');
