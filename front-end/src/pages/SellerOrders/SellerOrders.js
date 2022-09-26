/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import OrderStatusCard from '../../componentes/OrderstatusCard/OrderStatusCard';
import AuthContext from '../../contexts/AuthContext';
import api from '../../helpers/api';

export default function SellerOrders() {
  const auth = useContext(AuthContext);
  const sellerId = auth?.id || 2;
  const [orders, setOrders] = useState([]);
  console.log(orders);
  useEffect(() => {
    api.get(`/sales/by-seller/${sellerId}`)
      .then((response) => setOrders(response.data));
  }, []);
  return (
    <div>
      {orders && (orders.map(({
        id,
        status,
        totalPrice,
        saleDate,
        deliveryAddress }, index) => (
        <OrderStatusCard
          key={ index }
          id={ id }
          number={ id }
          status={ status }
          date={ saleDate }
          price={ totalPrice }
          address={ deliveryAddress }
        />
      )))}
    </div>
  );
}
