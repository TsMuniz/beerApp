import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" component={ Login } />
        <Route exact path="/"><Navigate to="/login" /></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
