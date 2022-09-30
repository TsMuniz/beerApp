import PropTypes from 'prop-types';
import React from 'react';

export default function SellerOrderDetailsTableWrapper(
  { status, date, orderNumber, children, totalPrice, setPreparing, setDelivery },
) {
  const setPreparingButtonDisable = (orderStatus) => (orderStatus !== 'Pendente');
  const setDispatchButtonDisable = (orderStatus) => (orderStatus !== 'Preparando');
  console.log(setPreparingButtonDisable(status));
  return (
    <div>
      <div>
        <span
          data-testid="seller_order_details__element-order-details-label-order-id"
        >
          Pedido
          {orderNumber}
        </span>
        <span
          data-testid="seller_order_details__element-order-details-label-order-date"
        >
          {date}
        </span>
        <span
          data-testid="seller_order_details__element-order-details-label-delivery-status"
        >
          {status}
        </span>
        <button
          data-testid="seller_order_details__button-preparing-check"
          onClick={ setPreparing }
          type="button"
          disabled={ setPreparingButtonDisable(status) }
        >
          PREPARAR PEDIDO
        </button>
        <button
          data-testid="seller_order_details__button-dispatch-check"
          onClick={ setDelivery }
          type="button"
          disabled={ setDispatchButtonDisable(status) }
        >
          SAIU PARA ENTREGA
        </button>
      </div>
      <table>
        {children}
      </table>
      <span
        data-testid="seller_order_details__element-order-total-price"
      >
        {totalPrice.replace('.', ',')}
      </span>
    </div>
  );
}

SellerOrderDetailsTableWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  date: PropTypes.string.isRequired,
  orderNumber: PropTypes.string.isRequired,
  setDelivery: PropTypes.func.isRequired,
  setPreparing: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
};
