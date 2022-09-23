import React from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../helpers/api';
import BotaoVerdeEscuro from '../../componentes/BotaoVerdeEscuro/BotaoVerdeEscuro';

function Products() {
  const [products, setProducts] = React.useState([]);
  const [setCart] = React.useState();

  const navigate = useNavigate();

  const getProducts = async () => {
    const { data } = await api.get('/products');
    setProducts(data);
  };

  const addProducts = async (add) => {
    setCart(add);
  };

  const removeProducts = async (remove) => {
    setCart(remove);
  };

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <ul>
        {products.map((product, index) => (
          <li key={ index }>
            <p
              data-testid={ `customer_products__element-card-title-${product.id}` }
            >
              {product.name}
            </p>
            <span
              data-testid={ `customer_products__element-card-price-${product.id}` }
            >
              {product.price}
            </span>
            <img
              src={ product.urlImage }
              alt={ product.name }
              width="100px"
              data-testid={ `customer_products__img-card-bg-image-${product.id}` }
            />
            <button
              type="button"
              data-testid={ `customer_products__button-card-add-item-${product.id}` }
              onClick={ () => addProducts(product) }
            >
              +
            </button>
            <input
              type="text"
              data-testid={ `customer_products__input-card-quantity-${product.id}` }
            />
            <button
              type="button"
              data-testid={ `customer_products__button-card-rm-item-${product.id}` }
              onClick={ () => removeProducts(product) }
            >
              -
            </button>
          </li>
        ))}
      </ul>
      <BotaoVerdeEscuro
        placeholder="Ver Carrinho: R$ 0"
        data-testid="customer_products__checkout-bottom-value"
        onClick={ () => navigate('/customer/checkout') }
      />
    </>
  );
}

export default Products;
