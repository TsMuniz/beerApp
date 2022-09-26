import React from 'react';
import PropTypes from 'prop-types';
import './BotaoVerdeEscuro.css';

function botaoVerdeEscuro({ placeholder }) {
  return (
    <button
      className="botaoVerdeEscuro"
      type="button"
    >
      <p>{placeholder}</p>
    </button>
  );
}

botaoVerdeEscuro.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default botaoVerdeEscuro;
