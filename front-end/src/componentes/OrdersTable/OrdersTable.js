import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export default function OrdersTable({ prefixId }) {
  const { cart, setCart } = useContext(CartContext);

  const handleRemove = (id) => {
    const remove = cart.filter((item) => item.id !== id);
    setCart(remove);
    localStorage.setItem('cart', JSON.stringify(remove));
  };

  const getSubValue = (quantity, unityValue) => {
    const subValue = Number(quantity) * Number(unityValue);
    return subValue.toFixed(2).replace('.', ',');
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>quantidade</th>
          <th>Valor unitário</th>
          <th>Sub-total</th>
          <th>Remover item</th>
        </tr>
      </thead>
      <tbody>
        {
          cart.map((product, index) => {
            const { id, name, quantity, price: unityValue } = product;
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
                  {unityValue}
                </td>
                <td
                  data-testid={
                    `${prefixId}__element-order-table-sub-total-${index}`
                  }
                >
                  { getSubValue() }
                </td>
                <td>
                  <button
                    type="button"
                    data-testid={
                      `${prefixId}__element-order-table-remove-${index}`
                    }
                    onClick={ () => handleRemove(id) }
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
