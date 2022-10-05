import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import NavBarLink from '../../components/NavBarLink/NavBarLink';
import { AuthContext } from '../../contexts/AuthContext';
import Unauthorized from '../../pages/UnauthorizedPage';

export default function AdminLayout() {
  const { auth } = useContext(AuthContext);
  if (auth.role !== 'administrator') return <Unauthorized />;

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
