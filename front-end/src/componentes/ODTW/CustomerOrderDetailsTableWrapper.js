import React from 'react';
import PropTypes from 'prop-types';

export default function CustomerOrderDetailsTableWrapper(
  { status, date, orderNumber, children, setDelivered, disable },
) {
  return (
    <div>
      <div>
        <span
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          Pedido
          {orderNumber}
        </span>
        <span
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          {date}
        </span>
        <span
          data-testid="customer_order_details__element
            -order-details-label-delivery-status"
        >
          {status}
        </span>
        <button
          disabled={ disable }
          data-testid="customer_order_details__button-delivery-check"
          onClick={ setDelivered }
          type="button"
        >
          ENTREGUE
        </button>
      </div>
      { children }
    </div>
  );
}

CustomerOrderDetailsTableWrapper.propTypes = {
  disable: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  date: PropTypes.string.isRequired,
  orderNumber: PropTypes.string.isRequired,
  setDelivered: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};
