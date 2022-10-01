import PropTypes from 'prop-types';
import React from 'react';
import formatToPrice from '../../helpers/formatToPrice';

export default function TableRowItems(
  { testIdPrefix, itemNumber, description, quantity, unityValue, subTotal },
) {
  return (
    <>
      <td
        data-testid={
          `${testIdPrefix}__element-order-table-item-number-${itemNumber - 1}`
        }
      >
        { itemNumber }
      </td>
      <td
        data-testid={
          `${testIdPrefix}__element-order-table-name-${itemNumber - 1}`
        }
      >
        { description }
      </td>
      <td
        data-testid={
          `${testIdPrefix}__element-order-table-quantity-${itemNumber - 1}`
        }
      >
        { quantity }
      </td>
      <td
        data-testid={
          `${testIdPrefix}__element-order-table-unit-price-${itemNumber - 1}`
        }
      >
        { formatToPrice(unityValue) }
      </td>
      <td
        data-testid={
          `${testIdPrefix}__element-order-table-sub-total-${itemNumber - 1}`
        }
      >
        { formatToPrice(subTotal) }
      </td>
    </>
  );
}

TableRowItems.propTypes = {
  testIdPrefix: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  itemNumber: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  subTotal: PropTypes.number.isRequired,
  unityValue: PropTypes.number.isRequired,
};
