import React from 'react';
import PropTypes from 'prop-types';

function InputTexto({ placeholder, dataTestid }) {
  const [inputTexto, setInputTexto] = React.useState('');

  handleChange = ({ target }) => {
    const { value } = target;
    setInputTexto(value);
  };

  return (
    <input
      data-testid={ dataTestid }
      type="text"
      placeholder={ placeholder }
      value={ inputTexto }
      onChange={ handleOnChange }
    />
  );
}

InputTexto.propTypes = {
  placeholder: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
};

export default InputTexto;
