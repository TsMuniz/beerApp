import React from 'react';
import api from '../../helpers/api';

function Address() {
  const [address, setAddress] = useState({ addres: '', addresNumber: '' });
  const [vendedor, setVendedor] = useState({ all: [], select: '' });

  const registerSeller = async (sale, token) => {
    const response = await api.post('/sale', sale, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  };

  const getSellers = async () => {
    const response = await api.get('/getsellers');
    return response.data;
  };

  useEffect(() => {
    const vendedores = async () => {
      const seller = await getSellers();
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
      deliveryAddress: addresUser.addres,
      deliveryNumber: addresUser.addresNumber,
      saleDate: new Date(),
      status: 'Pendente',
    };
    const cartIds = cart.map((prod) => ({ id: prod.id, qty: prod.qty }));
    const { id } = await registerSeller({ pedido, cartIds }, token);
    navigate(`/customer/orders/${id}`);
  };

  return (
    <>
      Detalhes e Endereço para Entrega
      <p>P. Vendedora Responsável:</p>
      <select
        data-testid="customer_checkout__select-seller"
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
      <p>Endereço</p>
      <input
        type="text"
        name="addres"
        data-testid="customer_checkout__input-address"
        onChange={ handleAddress }
      />
      <p>Número</p>
      <input
        data-testid="customer_checkout__input-address-number"
        type="number"
        name="addresNumber"
        onChange={ handleAddress }
      />
      <button
        data-testid="customer_checkout__button-submit-order"
        type="button"
        onClick={ handleButtonSubmitOrder }
      >
        Finalizar Pedido
      </button>
    </>
  );
}

export default Address;
