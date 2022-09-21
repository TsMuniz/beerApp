import React from 'react';
import PropTypes from 'prop-types';

function InputPassword({ placeholder, dataTestid }) {
  const [inputPassword, setInputPassword] = React.useState('');

  handleChange = ({ target }) => {
    const { value } = target;
    setInputPassword(value);
  };

  return (
    <input
      data-testid={ dataTestid }
      type="password"
      placeholder={ placeholder }
      value={ inputPassword }
      onChange={ handleOnChange }
    />
  );
}

InputPassword.propTypes = {
  placeholder: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
};

export default InputPassword;
