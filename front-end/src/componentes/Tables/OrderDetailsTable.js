import PropTypes from 'prop-types';
import React from 'react';
import TableRowItems from './TableRowItem/TableRowItems';

export default function OrderDetailsTable({ userType, orders }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor unitário</th>
          <th>Sub-total</th>
        </tr>
      </thead>
      <tbody>
        {
          orders.length > 0 && orders.map(({ product, quantity }, index) => {
            const subTotal = Number(product.price) * quantity;
            return (
              <tr key={ index }>
                <TableRowItems
                  testIdPrefix={ `${userType}_order_details` }
                  itemNumber={ index + 1 }
                  description={ product.name || '' }
                  quantity={ quantity }
                  unityValue={ Number(product.price) || 0 }
                  subTotal={ subTotal }
                />
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
}

OrderDetailsTable.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.any),
  ).isRequired,
  userType: PropTypes.string.isRequired,
};
