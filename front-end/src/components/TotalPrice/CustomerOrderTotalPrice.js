import { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../../contexts/CartContext';
import formatToPrice from '../../helpers/formatToPrice';

export default function CustomerOrderTotalPrice({ testIdPrefix }) {
  const { totalPrice } = useContext(CartContext);
  return (
    <div>
      Total Price: R$
      <p data-testid={ `${testIdPrefix}__element-order-total-price` }>
        { formatToPrice(totalPrice) }
      </p>
    </div>
  );
}

CustomerOrderTotalPrice.propTypes = {
  testIdPrefix: PropTypes.string.isRequired,
};
