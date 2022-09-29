import React from 'react';
import PropTypes from 'prop-types';
import './BotaoVerdeEscuro.css';

function botaoVerdeEscuro({ placeholder, click, isDisabled }) {
  return (

    <button
      className="botaoVerdeEscuro"
      type="button"
      onClick={ click }
      data-testid="customer_products__button-cart"
      disabled={ isDisabled }
    >
      <p
        data-testid="customer_products__checkout-bottom-value"
      >
        VerCarrinho:  R$
        {placeholder}
      </p>
    </button>

  );
}

botaoVerdeEscuro.propTypes = {
  placeholder: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default botaoVerdeEscuro;
