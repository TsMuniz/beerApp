import React from 'react';
import PropTypes from 'prop-types';
import './BotaoVerdeEscuro.css';

function botaoVerdeEscuro({ placeholder, click, isDisabled }) {
  return (

    <button
      disabled={ isDisabled }
      className="botaoVerdeEscuro"
      type="button"
      onClick={ click }
      data-testid="customer_products__button-cart"
    >
      <p
        data-testid="customer_products__checkout-bottom-value"
      >
        VerCarrinho:
        {placeholder}
      </p>
    </button>

  );
}

botaoVerdeEscuro.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default botaoVerdeEscuro;
