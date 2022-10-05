import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.scss';

function CounterProducts({ product, input, handleInput, changeProductsQuantity }) {
  return (
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
        className={ styles.inputQuantity }
        name={ product.id }
        defaultValue={ 0 }
        value={ input[product.id] }
        data-testid={ `customer_products__input-card-quantity-${product.id}` }
        onChange={ (e) => handleInput(e) }
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${product.id}` }
        onClick={ () => changeProductsQuantity('increment', product) }
      >
        +
      </button>
    </div>
  );
}

CounterProducts.propTypes = {
  handleInput: PropTypes.func.isRequired,
  input: PropTypes.shape({}).isRequired,
  product: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  changeProductsQuantity: PropTypes.func.isRequired,
};

export default CounterProducts;
