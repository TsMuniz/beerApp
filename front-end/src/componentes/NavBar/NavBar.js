import React from 'react';
import PropTypes from 'prop-types';
import ButtonLogout from '../Buttons/ButtonLogout';
import NavBarLink from '../NavBarLink/NavBarLink';

function NavBar({ userName }) {
  return (
    <div>
      <NavBarLink name="Produtos" path="/customer/products" />
      <NavBarLink name="Meus Pedidos" path="/customer/products" />
      {/* rota ainda nao foi criada */}
      <p>{ userName }</p>
      <ButtonLogout dataTestId="oi" />
    </div>
  );
}

NavBar.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default NavBar;
