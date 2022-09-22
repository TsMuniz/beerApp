import React from 'react';
import PropTypes from 'prop-types';

function BotaoCinza({ children, dataTestid, disabled, onClick }) {
  return (
    <button
      type="button"
      data-testid={ dataTestid }
      disabled={ disabled }
      onClick={ onClick }
    >
      { children }
    </button>
  );
}

BotaoCinza.propTypes = {
  children: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
  disabled: PropTypes.string.isRequired,
  onClick: PropTypes.string.isRequired,
};

export default BotaoCinza;
