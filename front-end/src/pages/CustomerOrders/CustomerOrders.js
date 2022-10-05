/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import OrderStatusCard from '../../componentes/OrderstatusCard/OrderStatusCard';
import api from '../../helpers/api';
import styles from './styles.module.scss';

export default function CustomerOrders() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const customerId = user.id;

    api.get(`/sales/by-customer/${+customerId}`)
      .then((response) => setOrders(response.data));
  }, []);

  return (
    <div
      className={ styles.container }
    >
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
          prefixId="customer_orders"
          redirect="customer"
        />
      )))}
    </div>
  );
}
