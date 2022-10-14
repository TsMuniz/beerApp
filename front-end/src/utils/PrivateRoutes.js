import { Outlet, Navigate } from 'react-router-dom';
import React from 'react';

export default function PrivateRoutes() {
  const { token } = JSON.parse(localStorage.getItem('user')) || '';
  console.log(token);

  return token ? <Outlet /> : <Navigate to="/" />;
}
