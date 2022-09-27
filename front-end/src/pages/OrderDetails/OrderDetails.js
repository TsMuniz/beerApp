import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import OrderDetailsTable from '../../componentes/OrderDetailsTable/OrderDetailsTable';
// eslint-disable-next-line max-len
import OrderDetailsTableWrapper from '../../componentes/OrderDetailsTableWrapper/OrderDetailsTableWrapper';
import api from '../../helpers/api';

export default function OrderDetails() {
  const orderId = useParams();

  const [order, setOrder] = useState({});
  console.log(order);
  useEffect(() => {
    api.get(`/sales/${+orderId.id}`)
      .then((response) => setOrder(response.data));
  }, [orderId]);
  // status, date, orderNumber, children, totalPrice
  // position, description, quantity, unityValue, subTotal
  return (
    <OrderDetailsTableWrapper
      orderNumber={ order.id }
      totalPrice={ order.totalPrice }
      status={ order.status }
      date={ format(Date.parse(order.saleDate), 'dd/MM/yyyy') }
    >
      <thead>
        <td>
          Item
        </td>
        <td>
          Descricao
        </td>
        <td>
          quantidade
        </td>
        <td>
          Valor Unitario
        </td>
        <td>
          Sub Total
        </td>
      </thead>
      {order.id && (order.products.map((product, index) => (
        <OrderDetailsTable
          key={ index }
          position={ index + 1 }
          description={ product.product.name }
          quantity={ product.quantity }
          unityValue={ product.product.price }
          subTotal={ (product.product.price * product.quantity).toFixed(2) }
        />
      )))}
    </OrderDetailsTableWrapper>
  );
}
