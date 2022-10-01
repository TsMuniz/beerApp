import React from 'react';
import PropTypes from 'prop-types';
import formatToPrice from '../../helpers/formatToPrice';

export default function SellerOrderTotalPrice({ totalPrice }) {
  return (
    <div>
      Total Price: R$
      <p data-testid="seller_order_details__element-order-total-price">
        { formatToPrice(totalPrice) }
      </p>
    </div>
  );
}

SellerOrderTotalPrice.propTypes = {
  totalPrice: PropTypes.string.isRequired,
};
