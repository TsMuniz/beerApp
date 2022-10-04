import React, { useContext } from 'react';
import { CartContext } from '../../../contexts/CartContext';
import TableRowItems from '../TableRowItem/TableRowItems';
import styles from './styles.module.scss';

export default function CustomerCheckoutTable() {
  const { cart, setCart, setTotalPrice, totalPrice } = useContext(CartContext);

  const handleRemove = (id, subTotal) => {
    const items = cart.filter((item) => item.id !== id);
    setTotalPrice(totalPrice - subTotal);
    setCart(items);
    localStorage.setItem('cart', JSON.stringify(items));
  };

  return (

    <div className={ styles.tableWrapper }>
      <h2>
        FINALIZAR PEDIDO
      </h2>
      <table
        className={ styles.checkoutTable }
      >
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
              const subTotal = Number(product.price) * product.quantity;
              console.log(product);
              return (
                <tr key={ index }>
                  <TableRowItems
                    testIdPrefix="customer_checkout"
                    itemNumber={ index + 1 }
                    description={ product.name }
                    quantity={ product.quantity }
                    unityValue={ Number(product.price) }
                    subTotal={ subTotal }
                  />
                  <td>
                    <button
                      type="button"
                      className={ styles.buttonRemove }
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
    </div>
  );
}
