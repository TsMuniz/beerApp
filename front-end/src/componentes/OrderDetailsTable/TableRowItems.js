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
          `${testIdPrefix}__element-order-table-item-number-${itemNumber}`
        }
      >
        { itemNumber }
      </td>
      <td
        data-testid={
          `${testIdPrefix}__element-order-table-name-${description}`
        }
      >
        { description }
      </td>
      <td
        data-testid={
          `${testIdPrefix}__element-order-table-quantity-${quantity}`
        }
      >
        { quantity }
      </td>
      <td
        data-testid={
          `${testIdPrefix}__element-order-table-unit-price-${unityValue}`
        }
      >
        { unityValue }
      </td>
      <td
        data-testid={
          `${testIdPrefix}__element-order-table-sub-total-${subTotal}`
        }
      >
        { formatToPrice(subTotal) }
      </td>
    </>
  );
}

TableRowItems.propTypes = {
  testIdPrefix: PropTypes.string.isRequired,
  description: PropTypes.number.isRequired,
  itemNumber: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  subTotal: PropTypes.string.isRequired,
  unityValue: PropTypes.string.isRequired,
};
