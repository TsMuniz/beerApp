import React from 'react';
import InputPassword from '../InputPassword/InputPassword';
import InputTexto from '../InputTexto/InputTexto';
import Botao from '../Botao/Botao';

function Formlogin() {
  return (
    <>
      <InputTexto
        data-testid="common_login__input-email"
        placeholder="Ex: your@email.com"
      >
        Login
      </InputTexto>
      <InputPassword
        data-testid="common_login__input-password"
        placeholder="******"
      >
        Senha
      </InputPassword>
      <Botao
        dataTestid="common_login__button-login"
      >
        LOGIN
      </Botao>
      <Botao
        data-testid="common_login__button-register"
      >
        Ainda não tenho conta
      </Botao>
    </>
  );
}

export default Formlogin;
