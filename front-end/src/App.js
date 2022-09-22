import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route exact path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
document.getElementById("root")