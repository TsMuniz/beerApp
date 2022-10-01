import React from 'react';
import PropTypes from 'prop-types';
import formatToPrice from '../helpers/formatToPrice';

export default function OrderTotalPrice({ userType, children }) {
  return (
    <div>
      Total Price: R$
      <p data-testid={ `${userType}_order_details__element-order-total-price` }>
        { formatToPrice(children) }
      </p>
    </div>
  );
}

OrderTotalPrice.propTypes = {
  userType: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
