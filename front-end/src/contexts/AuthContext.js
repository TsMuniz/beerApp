import PropTypes from 'prop-types';
// import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  // const [auth, setAuth] = useState(false);

  return (
    <AuthContext.Provider value>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
