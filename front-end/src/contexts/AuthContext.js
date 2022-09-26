import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={ { auth, setAuth } }>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
