import { Outlet, Navigate } from 'react-router-dom';

import React from 'react';

export default function PrivateRoutes() {
  const auth = { token: true }; // esta feito assim pois ainda nao alinhei com resto do pessoal sobre como vamos enviar isto pra ca no formulario de login

  return auth.token ? <Outlet /> : <Navigate to="/" />;
}
