import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../componentes/NavBar/NavBar';

export default function CustomerLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
