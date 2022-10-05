import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import NavBarLink from '../../components/NavBarLink';
import { AuthContext } from '../../contexts/AuthContext';
import CartProvider from '../../contexts/CartContext';
import Unauthorized from '../../pages/UnauthorizedPage';

export default function CustomerLayout() {
  const { auth } = useContext(AuthContext);
  if (auth.role !== 'customer') return <Unauthorized />;
  return (
    <CartProvider>
      <NavBar>
        <NavBarLink
          name="Produtos"
          path="/customer/products"
          dataTestId="customer_products__element-navbar-link-products"
        />
        <NavBarLink
          name="Meus Pedidos"
          path="/customer/orders"
          dataTestId="customer_products__element-navbar-link-orders"
        />
      </NavBar>
      <Outlet />
    </CartProvider>
  );
}
