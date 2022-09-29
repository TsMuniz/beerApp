import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import formatToPrice from '../../helpers/formatToPrice';

export default function OrdersTable({ prefixId }) {
  const { cart, setCart, setTotalPrice, totalPrice } = useContext(CartContext);

  const handleRemove = (id, subTotal) => {
    const items = cart.filter((item) => item.id !== id);
    setTotalPrice(totalPrice - subTotal);
    setCart(items);
    localStorage.setItem('cart', JSON.stringify(items));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor unitário</th>
          <th>Sub-total</th>
          <th>Remover item</th>
        </tr>
      </thead>
      <tbody>
        {
          cart.map((product, index) => {
            const { id, name, quantity, price: unityValue } = product;
            const subTotal = quantity * unityValue;
            return (
              <tr key={ index }>
                <td
                  data-testid={
                    `${prefixId}__element-order-table-item-number-${index}`
                  }
                >
                  {index + 1}
                </td>
                <td
                  data-testid={
                    `${prefixId}__element-order-table-name-${index}`
                  }
                >
                  {name}
                </td>
                <td
                  data-testid={
                    `${prefixId}__element-order-table-quantity-${index}`
                  }
                >
                  {quantity}
                </td>
                <td
                  data-testid={
                    `${prefixId}__element-order-table-unit-price-${index}`
                  }
                >
                  { unityValue.replace('.', ',') }
                </td>
                <td
                  data-testid={
                    `${prefixId}__element-order-table-sub-total-${index}`
                  }
                >
                  { formatToPrice(subTotal) }
                </td>
                <td>
                  <button
                    type="button"
                    data-testid={
                      `${prefixId}__element-order-table-remove-${index}`
                    }
                    onClick={ () => handleRemove(id, subTotal) }
                  >
                    REMOVER
                  </button>
                </td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
}

OrdersTable.propTypes = {
  prefixId: PropTypes.string.isRequired,
};
