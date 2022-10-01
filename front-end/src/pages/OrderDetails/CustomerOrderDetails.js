/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import CustomerOrderDetailsTable
  from '../../componentes/OrderDetailsTable/CustomerOrderDetailsTable';
import CustomerOrderDetailsTableWrapper
  from '../../componentes/ODTW/CustomerOrderDetailsTableWrapper';
import api from '../../helpers/api';

export default function CustomerOrderDetails() {
  const orderId = useParams();

  const [order, setOrder] = useState({});
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    api.get(`/sales/${+orderId.id}`)
      .then((response) => setOrder(response.data));
  }, []);

  const handleDelivered = async () => {
    try {
      await api.patch(`sales/finishOrder/${orderId.id}`);
      setDisabled(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (!order?.id) {
    return null;
  }
  return (
    <CustomerOrderDetailsTableWrapper
      orderNumber={ order.id }
      totalPrice={ order.totalPrice }
      status={ order.status }
      date={ format(Date.parse(order.saleDate), 'dd/MM/yyyy') }
      disable={ disabled }
      setDelivered={ handleDelivered }
    >
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub Total</th>
        </tr>
      </thead>
      <tbody>
        {order.products.map?.((product, index) => (
          <CustomerOrderDetailsTable
            key={ index }
            position={ index + 1 }
            description={ product.product.name }
            quantity={ product.quantity }
            unityValue={ product.product.price }
            subTotal={ (product.product.price * product.quantity).toFixed(2) }
          />
        ))}
      </tbody>
    </CustomerOrderDetailsTableWrapper>
  );
}
