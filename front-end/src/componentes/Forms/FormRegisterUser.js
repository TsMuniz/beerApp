import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import api from '../../helpers/api';
import httpStatus from '../../helpers/httpStatus';

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const MIN_PASSWORD = 6;
const MIN_NAME = 12;

function FormRegisterUser() {
  const { auth } = useContext(AuthContext);

  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [isInvalidRegister, setIsInvalidRegister] = useState(false);
  const [isDisableBtn, setIsDisableBtn] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (
      emailRegex.test(email)
      && password.length >= MIN_PASSWORD
      && name.length >= MIN_NAME) {
      setIsDisableBtn(false);
    } else {
      setIsDisableBtn(true);
    }
  }, [email, password, name]);

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await api.post(
      '/register/admin',
      { name, email, role, password },
      {
        validateStatus: (status) => status,
        headers: { Authorization: auth.token },
      },
    );
    if (response.status === httpStatus.CREATED) {
      setIsInvalidRegister(false);
    } else { setIsInvalidRegister(true); }

    if (response.status === httpStatus.BAD_REQUEST) {
      setErrorMessage('Dados inválidos');
    } else if (response.status === httpStatus.CONFLICT) {
      setErrorMessage('Usuário já cadastrado');
    }
  }

  return (
    <>
      {
        isInvalidRegister && (
          <p data-testid="admin_manage__element-invalid-register">
            { errorMessage }
          </p>
        )
      }
      <form onSubmit={ handleSubmit }>
        <label htmlFor="input-name">
          Nome
          <input
            type="text"
            name="name"
            id="input-name"
            placeholder="Nome e sobrenome"
            data-testid="admin_manage__input-name"
            onChange={ ({ target }) => { setname(target.value); } }
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
          />
        </label>
        <label htmlFor="input-role">
          Tipo
          <select
            name="role"
            id="input-role"
            data-testid="admin_manage__select-role"
            defaultValue="seller"
            onChange={ ({ target }) => { setRole(target.value); } }
          >
            <option value="seller">Cliente</option>
            <option value="customer">Vendedor(a)</option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="admin_manage__button-register"
          disabled={ isDisableBtn }
        >
          Cadastrar
        </button>
      </form>
    </>
  );
}

export default FormRegisterUser;
