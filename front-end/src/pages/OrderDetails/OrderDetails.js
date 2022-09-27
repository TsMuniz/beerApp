import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../helpers/api';

export default function OrderDetails() {
  const orderId = useParams();

  const [order, setOrder] = useState({});
  console.log(order);
  useEffect(() => {
    api.get(`/sales/${+orderId.id}`)
      .then((response) => setOrder(response.data));
  }, [orderId]);

  return (
    <div>{orderId.id}</div>
  );
}
