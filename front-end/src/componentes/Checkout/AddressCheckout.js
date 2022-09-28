import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../helpers/api';
import './AddressCheckout.css';

function Address() {
  const [address, setAddress] = useState({ address: '', addressNumber: '' });
  const [vendedor, setVendedor] = useState({ all: [], select: '' });
  const navigate = useNavigate();

  const registerSeller = async (sale, token) => {
    const response = await api.post('/user', sale, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  };

  const getSellers = async () => {
    const response = await api.get('/user');
    // console.log(response);
    return response.data;
  };

  useEffect(() => {
    const vendedores = async () => {
      const seller = await getSellers();
      console.log(seller);
      setVendedor({ all: seller, select: seller[0].id });
    };
    vendedores();
  }, []);

  const handleAddress = ({ target }) => {
    const { value, name } = target;
    setAddress({ ...address, [name]: value });
  };

  const handleButtonSubmitOrder = async () => {
    const total = handleTotal();
    const pedido = {
      userId: '',
      sellerId: vendedor.select,
      totalPrice: Number(total),
      deliveryAddress: address.address,
      deliveryNumber: address.addressNumber,
      saleDate: new Date(),
      status: 'Pendente',
    };
    const cartIds = cart.map((prod) => ({ id: prod.id, qty: prod.qty }));
    const { id } = await registerSeller({ pedido, cartIds }, token);
    navigate(`/customer/orders/${id}`);
  };

  return (
    <>
      <h3 className="AddressTitle">Detalhes e Endereço para Entrega</h3>
      <div className="AddressComponent">
        <div className="AddressFlex">
          <div className="AddressContent">
            <p>P. Vendedora Responsável:</p>
            <select
              data-testid="customer_checkout__select-seller"
              className="AddressInput"
            >
              {vendedor.all.length !== 0 && vendedor.all.map((vend, index) => (
                <option
                  key={ index }
                  value={ vend.name }
                >
                  {vend.name}
                </option>
              ))}
            </select>
          </div>
          <div className="AddressContent">
            <p>Endereço</p>
            <input
              type="text"
              name="addres"
              className="AddressInput"
              data-testid="customer_checkout__input-address"
              onChange={ handleAddress }
            />
          </div>
          <div className="AddressContent">
            <p>Número</p>
            <input
              data-testid="customer_checkout__input-address-number"
              type="number"
              className="AddressInput"
              name="addresNumber"
              onChange={ handleAddress }
            />
          </div>
        </div>
        <div className="AddressContent">
          <button
            data-testid="customer_checkout__button-submit-order"
            type="button"
            className="AddressButton"
            onClick={ handleButtonSubmitOrder }
          >
            <b>FINALIZAR PEDIDO</b>
          </button>
        </div>
      </div>
    </>
  );
}

export default Address;
