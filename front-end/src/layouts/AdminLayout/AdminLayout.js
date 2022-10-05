import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import NavBarLink from '../../components/NavBarLink/NavBarLink';

export default function AdminLayout() {
  return (
    <>
      <NavBar>
        <NavBarLink
          name="Gerenciar usuários"
          path="/admin/manage"
          dataTestId="customer_products__element-navbar-link-orders"
        />
      </NavBar>
      <Outlet />
    </>
  );
}
