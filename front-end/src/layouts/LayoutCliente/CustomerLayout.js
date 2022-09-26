import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../componentes/NavBar/NavBar';
import NavBarLink from '../../componentes/NavBarLink/NavBarLink';

export default function CustomerLayout() {
  return (
    <>
      <NavBar>
        <NavBarLink name="Produtos" path="/customer/products" />
        <NavBarLink name="Meus Pedidos" path="/customer/products" />
      </NavBar>
      <Outlet />
    </>
  );
}
