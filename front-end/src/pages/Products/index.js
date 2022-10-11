/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../config/api';
import { CartContext } from '../../contexts/CartContext';
import styles from './styles.module.scss';
import ProductCard from '../../components/ProductCard';
import CounterProducts from '../../components/CounterProducts/CounterProducts';
import CartButton from '../../components/Buttons/CartButton';

function Products() {
  const [products, setProducts] = React.useState([]);
  const { setCart, setTotalPrice } = useContext(CartContext);
  const [input, setInput] = React.useState({});
  const [checkoutDisable, setCheckoutDisable] = React.useState(true);
  const navigate = useNavigate();
  const getProducts = async () => {
    const { data } = await api.get('/products');
    setProducts(data);
  };

  const handleInput = ({ target }) => {
    const { name, value } = target;
    return setInput({ ...input, [name]: +value });
  };

  React.useEffect(() => {
    getProducts();
  }, []);

  React.useEffect(() => {
    const productsWithQuantity = products.map((product) => {
      const quantity = input[product.id] || 0;
      return { ...product, quantity };
    });
    const totalPrice = productsWithQuantity
      .reduce((acc, { price, quantity }) => acc + (+price * quantity), 0);
    if (totalPrice > 0) setCheckoutDisable(false);
  }, [input, products]);

  const changeProductsQuantity = (type, product) => {
    if ((input[product.id] === 0
      && type === 'decrement')
     || Number.isNaN(input[product.id])
    ) {
      console.log(input);
      return setInput({ ...input, [product.id]: 0 });
    }
    if (!input[product.id] && type === 'increment') {
      return setInput({ ...input, [product.id]: 1 });
    }
    if (type === 'increment') {
      return setInput({ ...input, [product.id]: input[product.id] + 1 });
    }
    return setInput({ ...input, [product.id]: input[product.id] - 1 });
  };

  const getTotalPrice = () => {
    const productsWithQuantity = products.map((product) => {
      const quantity = input[product.id] || 0;
      return { ...product, quantity };
    });
    const totalPrice = productsWithQuantity
      .reduce((acc, { price, quantity }) => acc + (+price * quantity), 0);
    return totalPrice;
  };

  const handleSetCart = () => {
    const productsWithQuantity = products.map((product) => {
      const quantity = input[product.id] || 0;
      return { ...product, quantity };
    });
    const itemsInCart = productsWithQuantity
      .filter(({ quantity }) => quantity !== 0);
    setCart(itemsInCart);
    setTotalPrice(getTotalPrice());
    navigate('/customer/checkout');
  };

  return (
    <div className={ styles.container }>
      {products.map?.((product, index) => (
        <ProductCard
          key={ `${product}${index}` }
          product={ product }
          index={ index }
        >
          <CounterProducts
            product={ product }
            input={ input }
            handleInput={ handleInput }
            changeProductsQuantity={ changeProductsQuantity }
          />
        </ProductCard>
      ))}
      <CartButton
        click={ handleSetCart }
        placeholder={ getTotalPrice() }
        isDisabled={ checkoutDisable }
      />
    </div>
  );
}

export default Products;
