import PropTypes from 'prop-types';
import React from 'react';

export default function CustomerOrderDetailsTable(
  { position, description, quantity, unityValue, subTotal },
) {
  return (

    <tr>
      <td
        data-testid={ `customer_order_details__element-order
          -table-item-number-${position}` }
      >
        {position}
      </td>
      <td
        data-testid={ `customer_order_details__element-order-table-name-${description}` }
      >
        {description}
      </td>
      <td
        data-testid={ `customer_order_details__element-order-table-quantity-${quantity}` }
      >
        {quantity}
      </td>
      <td
        data-testid={ `customer_order_details__element-order-table
          -unit-price-${unityValue}` }
      >
        {unityValue}
      </td>
      <td
        data-testid={ `customer_order_details__element-order-table
          -sub-total-${subTotal}` }
      >
        {subTotal}
      </td>
    </tr>
  );
}

CustomerOrderDetailsTable.propTypes = {
  description: PropTypes.number.isRequired,
  position: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  subTotal: PropTypes.string.isRequired,
  unityValue: PropTypes.string.isRequired,
};
