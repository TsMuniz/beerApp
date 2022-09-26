import React from 'react';
import { Outlet } from 'react-router-dom';

export default function SellerLayout() {
  return (
    <>
      <div>SellerLayout</div>
      <Outlet />
    </>
  );
}
