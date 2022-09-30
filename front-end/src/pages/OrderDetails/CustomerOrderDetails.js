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
  }, [orderId]);

  const handleDelivered = async () => {
    try {
      await api.patch(`sales/changeStatus/${orderId.id}/?status=2`);
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
      <CustomerOrderDetailsTable orders={ order.products } />
    </CustomerOrderDetailsTableWrapper>
  );
}
