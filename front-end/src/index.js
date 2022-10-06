import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes'
import AuthProvider from './contexts/AuthContext'
import './styles/global.scss'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
          <Routes />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

