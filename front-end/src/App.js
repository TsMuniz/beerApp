import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Products from './pages/Products/Products';

function App() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route exact path="/" element={ <Navigate to="/login" replace /> } />
      <Route path="/register" element={ <Cadastro /> } />
      <Route path="/customer/products" element={ <Products /> } />
    </Routes>
  );
}

export default App;
document.getElementById('root');
