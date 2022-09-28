import React from 'react';
import PropTypes from 'prop-types';
import './BotaoVerdeEscuro.css';

function botaoVerdeEscuro({ placeholder, click }) {
  return (
    <button
      className="botaoVerdeEscuro"
      type="button"
      onClick={ click }
    >
      <p>{placeholder}</p>
    </button>
  );
}

botaoVerdeEscuro.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default botaoVerdeEscuro;
