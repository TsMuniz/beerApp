/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../helpers/api';
import BotaoVerdeEscuro from '../../componentes/BotaoVerdeEscuro/BotaoVerdeEscuro';
import { CartContext } from '../../contexts/CartContext';
import styles from './styles.module.scss';

function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = React.useState([]);
  const [productsWithQuantity, setProductsWithQuantity] = React.useState([]);
  const { setCart } = useContext(CartContext);
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

  const changeProductsQuantity = (type, product) => {
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
    return totalPrice.toFixed(2).replace('.', ',');
  };

  const handleSetCart = () => {
    console.log('click');
    const itemsInCart = productsWithQuantity
      .filter(({ quantity }) => quantity !== 0);
    setCart(itemsInCart);
    navigate('/customer/checkout');
  };

  return (
    <div className={ styles.container }>
      {products.map?.((product, index) => (
        <div
          className={ styles.cardContainer }
          key={ index }
        >
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
          <div className={ styles.QuantityButtonContainer }>
            <button
              type="button"
              data-testid={ `customer_products__button-card-rm-item-${product.id}` }
              onClick={ () => changeProductsQuantity('decrement', product) }
            >
              -
            </button>
            <input
              type="text"
              data-testid={ `customer_products__input-card-quantity-${product.id}` }
              value={ findQuantity(product.id) }

            />
            <button
              type="button"
              data-testid={ `customer_products__button-card-add-item-${product.id}` }
              onClick={ () => changeProductsQuantity('increment', product) }
            >
              +
            </button>
          </div>
        </div>
      ))}

      <BotaoVerdeEscuro
        click={ handleSetCart }
        placeholder={ `Ver Carrinho: R$ ${getTotalPrice()}` }
        data-testid="customer_products__checkout-bottom-value"
      />
    </div>
  );
}

export default Products;
