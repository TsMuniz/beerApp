import React from 'react';

function FormRegister() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isDisableBtn, setIsDisableBtn] = React.useState(true);

  const MIN = 6;

  const validateLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);
    if (isEmailValid && password.length >= MIN) {
      setIsDisableBtn(false);
    } else setIsDisableBtn(true);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    validateLogin();
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    validateLogin();
  };

  return (
    <form>
      <input
        type="text"
        name="email"
        placeholder="Ex: email@email.com"
        data-testid="common_login__input-email"
        onChange={ handleChangeEmail }
        value={ email }
      />
      <input
        type="password"
        name="password"
        placeholder="******"
        data-testid="common_login__input-password"
        onChange={ handleChangePassword }
        value={ password }
      />
      <button
        type="button"
        disabled={ isDisableBtn }
        data-testid="common_login__button-login"
      >
        LOGIN
      </button>
      <button
        type="button"
        data-testid="common_login__button-register"
      >
        Ainda não tenho conta
      </button>
    </form>
  );
}

export default FormRegister;
