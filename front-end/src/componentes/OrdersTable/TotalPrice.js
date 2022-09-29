import { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../../contexts/CartContext';

export default function TotalPrice({ prefixId }) {
  const { totalPrice } = useContext(CartContext);
  return (
    <div>
      Total Price: R$
      <p data-testid={ `${prefixId}__element-order-total-price` }>
        { totalPrice }
      </p>
    </div>
  );
}

TotalPrice.propTypes = {
  prefixId: PropTypes.string.isRequired,
};
