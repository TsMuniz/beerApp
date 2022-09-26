import React, { useEffect, useState } from 'react';

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const MIN = 6;

function FormRegisterUser() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isInvalidRegister, setIsInvalidRegister] = useState(false);

  useEffect(() => {
    if (emailRegex.test(email) && password.length >= MIN) {
      setIsInvalidRegister(false);
    } else {
      setIsInvalidRegister(true);
    }
  }, [email, password]);

  return (
    <>
      {
        isInvalidRegister && (
          <p data-testid="admin_manage__element-invalid-register">
            Cadastro inválido
          </p>
        )
      }
      <form>
        <label htmlFor="input-name">
          Nome
          <input
            type="text"
            name="userName"
            id="input-name"
            placeholder="Nome e sobrenome"
            data-testid="admin_manage__input-name"
            onChange={ ({ target }) => { setEmail(target.value); } }
          />
        </label>
        <label htmlFor="input-email">
          Email
          <input
            type="text"
            name="email"
            id="input-email"
            placeholder="Ex: email@email.com"
            data-testid="admin_manage__input-email"
            onChange={ ({ target }) => { setEmail(target.value); } }
          />
        </label>
        <label htmlFor="input-password">
          Senha
          <input
            type="password"
            name="password"
            id="input-password"
            placeholder="******"
            data-testid="admin_manage__input-password"
            onChange={ ({ target }) => { setPassword(target.value); } }
            value={ password }
          />
        </label>
        <label htmlFor="input-role">
          Tipo
          <select
            name="role"
            id="input-role"
            data-testid="admin_manage__select-role"
          >
            <option value="valor1">Cliente</option>
            <option value="valor2">Vendedor(a)</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="admin_manage__button-register"
          disabled={ isInvalidRegister }
        >
          Cadastrar
        </button>
      </form>
    </>
  );
}

export default FormRegisterUser;
