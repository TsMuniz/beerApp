import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import NavBarLink from '../../components/NavBarLink';
import { AuthContext } from '../../contexts/AuthContext';
import Unauthorized from '../../pages/UnauthorizedPage';

export default function SellerLayout() {
  const { auth } = useContext(AuthContext);
  if (auth.role !== 'seller') return <Unauthorized />;

  return (
    <>
      <NavBar>
        <NavBarLink
          name="Pedidos"
          path="/seller/orders"
          dataTestId="customer_products__element-navbar-link-products"
        />
      </NavBar>
      <Outlet />
    </>
  );
}
