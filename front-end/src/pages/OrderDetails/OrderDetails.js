import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import OrderDetailsTable from '../../componentes/OrderDetailsTable/OrderDetailsTable';
import OrderDetailsTableWrapper from '../../componentes/ODTW/OrderDetailsTableWrapper';
import api from '../../helpers/api';

export default function OrderDetails() {
  const orderId = useParams();

  const [order, setOrder] = useState({});
  useEffect(() => {
    api.get(`/sales/${+orderId.id}`)
      .then((response) => setOrder(response.data));
  }, [orderId]);
  const handleDelivery = async () => {
    try {
      await api.patch(`sales/changeStatus/${orderId.id}/?status=1`);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handlePreparing = async () => {
    try {
      await api.patch(`sales/changeStatus/${orderId.id}/?status=0`);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (!order?.id) {
    return null;
  }
  return (
    <OrderDetailsTableWrapper
      orderNumber={ order.id }
      totalPrice={ order.totalPrice }
      status={ order.status }
      date={ format(Date.parse(order.saleDate), 'dd/MM/yyyy') }
      setDelivery={ handleDelivery }
      setPreparing={ handlePreparing }
    >
      <thead>
        <td>Item</td>
        <td>Descricao</td>
        <td>Quantidade</td>
        <td>Valor Unitario</td>
        <td>Sub Total</td>
      </thead>
      <tbody>
        {order.products.map?.((product, index) => (
          <OrderDetailsTable
            key={ index }
            position={ index + 1 }
            description={ product.product.name }
            quantity={ product.quantity }
            unityValue={ product.product.price }
            subTotal={ (product.product.price * product.quantity).toFixed(2) }
          />
        ))}
      </tbody>
    </OrderDetailsTableWrapper>
  );
}
