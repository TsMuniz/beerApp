import PropTypes from 'prop-types';
import React from 'react';
import formatToPrice from '../../../helpers/formatToPrice';
// import styles from './styles.module.scss';

export default function TableRowItems(
  { itemNumber, description, quantity, unityValue, subTotal },
) {
  return (
    <>
      <td
        data-label="Item"
      >
        { itemNumber }
      </td>
      <td
        data-label="Descrição"

      >
        { description }
      </td>
      <td
        data-label="Quantidade"

      >
        { quantity }
      </td>
      <td
        data-label="Valor Unitário"

      >
        R$
        {' '}
        { formatToPrice(unityValue) }
      </td>
      <td
        data-label="Sub-Total"

      >
        R$
        {' '}
        { formatToPrice(subTotal) }
      </td>
    </>
  );
}

TableRowItems.propTypes = {
  description: PropTypes.string.isRequired,
  itemNumber: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  subTotal: PropTypes.number.isRequired,
  unityValue: PropTypes.number.isRequired,
};
