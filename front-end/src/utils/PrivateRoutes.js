import { Outlet, Navigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function PrivateRoutes() {
  const { auth } = useContext(AuthContext);
  const { token } = JSON.parse(localStorage.getItem('user'));

  const isAuth = auth.token || token;

  return isAuth ? <Outlet /> : <Navigate to="/" />;
}
