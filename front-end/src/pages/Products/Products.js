/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../helpers/api';
import BotaoVerdeEscuro from '../../componentes/BotaoVerdeEscuro/BotaoVerdeEscuro';

function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = React.useState([]);
  const [productsWithQuantity, setProductsWithQuantity] = React.useState([]);

  const getProducts = async () => {
    const { data } = await api.get('/products');
    setProducts(data);
  };

  React.useEffect(() => {
    getProducts();
  }, []);
  React.useEffect(() => {
    setProductsWithQuantity(products.map((product) => ({ ...product, quantity: 0 })));
  }, [products]);

  const bb = (type, product) => {
    const productPosition = productsWithQuantity
      .findIndex(({ id }) => id === product.id);
    const aux = productsWithQuantity[productPosition];
    let productIncremented;

    if (aux.quantity === 0 && type === 'decrement') {
      productIncremented = { ...aux, quantity: 0 };
      const aux2 = productsWithQuantity.filter(({ id }) => id !== product.id);
      return setProductsWithQuantity([...aux2, productIncremented]);
    }
    productIncremented = type === 'increment'
      ? { ...aux, quantity: aux.quantity += 1 }
      : { ...aux, quantity: aux.quantity -= 1 };
    const aux2 = productsWithQuantity.filter(({ id }) => id !== product.id);
    setProductsWithQuantity([...aux2, productIncremented]);
  };

  const findQuantity = (product) => {
    const productQuantity = productsWithQuantity
      .find(({ id }) => id === product);
    return productQuantity?.quantity;
  };

  const getTotalPrice = () => {
    const totalPrice = productsWithQuantity
      .reduce((acc, { price, quantity }) => acc + (+price * quantity), 0);
    return totalPrice.toFixed(2);
  };

  if (!products.length && !productsWithQuantity.length) return null;
  return (
    <>
      {products.map((product, index) => (
        <div key={ index }>
          <p
            data-testid={ `customer_products__element-card-title-${product.id}` }
          >
            {product.name}
          </p>
          <span
            data-testid={ `customer_products__element-card-price-${product.id}` }
          >
            {product.price.replace('.', ',')}
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
            onClick={ () => bb('increment', product) }
          >
            +
          </button>
          <div
            type="text"
            data-testid={ `customer_products__input-card-quantity-${product.id}` }
          >
            {findQuantity(product.id) }
          </div>
          <button
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${product.id}` }
            onClick={ () => bb('decrement', product) }
          >
            -
          </button>
        </div>
      ))}

      <BotaoVerdeEscuro
        placeholder={ `Ver Carrinho: R$ ${getTotalPrice()}` }
        data-testid="customer_products__checkout-bottom-value"
        onClick={ () => navigate('/customer/checkout') }
      />
    </>
  );
}

export default Products;
