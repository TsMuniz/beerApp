/* eslint-disable react-hooks/exhaustive-deps */
import { format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import OrderStatusCard from '../../components/OrderstatusCard';
import { AuthContext } from '../../contexts/AuthContext';
import api from '../../config/api';

export default function SellerOrders() {
  const { auth } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const sellerId = auth.id;

    api.get(`/sales/by-seller/${+sellerId}`)
      .then((response) => setOrders(response.data));
  }, [auth]);

  return (
    <div>
      {orders && (orders.map(({
        id,
        status,
        totalPrice,
        saleDate,
        deliveryAddress,
      }, index) => (
        <OrderStatusCard
          key={ index }
          id={ id }
          number={ id }
          status={ status }
          date={ format(Date.parse(saleDate), 'dd/MM/yyyy') }
          price={ totalPrice }
          address={ deliveryAddress }
          prefixId="seller_orders"
          redirect="seller"
        />
      )))}
    </div>
  );
}
