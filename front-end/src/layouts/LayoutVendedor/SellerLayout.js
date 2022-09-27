import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../componentes/NavBar/NavBar';
import NavBarLink from '../../componentes/NavBarLink/NavBarLink';
import { AuthContext } from '../../contexts/AuthContext';

export default function SellerLayout() {
  const { auth } = useContext(AuthContext);

  return (
    <>
      <NavBar
        userName={ auth.name }
      >
        <NavBarLink
          name="Pedidos"
          path="/seller/orders"
        />
      </NavBar>
      <Outlet />
    </>
  );
}
