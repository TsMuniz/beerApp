import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import TableRowItems from './TableRowItems';

export default function CustomerCheckoutTable() {
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
            const subTotal = product.price * product.quantity;
            return (
              <tr key={ index }>
                <TableRowItems
                  testIdPrefix="customer_checkout"
                  itemNumber={ index + 1 }
                  description={ product.name }
                  quantity={ product.quantity }
                  unityValue={ product.price }
                  subTotal={ subTotal }
                />
                <td>
                  <button
                    type="button"
                    data-testid={
                      `customer_checkout__element-order-table-remove-${index}`
                    }
                    onClick={ () => handleRemove(product.id, subTotal) }
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
