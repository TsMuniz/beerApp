import React, { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';

export default function SellerOrders() {
  const role = useContext(AuthContext);

  return (
    <div>SellerOrders</div>
  );
}
