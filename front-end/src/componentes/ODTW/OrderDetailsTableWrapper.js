import PropTypes from 'prop-types';
import React from 'react';

export default function OrderDetailsTableWrapper(
  { status, date, orderNumber, children, totalPrice, setPreparing, setDelivery },
) {
  return (
    <div>
      <div>
        <span>
          Pedido
          {orderNumber}
        </span>
        <span>
          {date}
        </span>
        <span>
          {status}
        </span>
        <button
          onClick={ setPreparing }
          type="button"
        >
          PREPARAR PEDIDO
        </button>
        <button
          onClick={ setDelivery }
          type="button"
        >
          SAIU PARA ENTREGA
        </button>
      </div>
      <div>
        {children}
      </div>
      <span>
        {totalPrice}
      </span>
    </div>
  );
}

OrderDetailsTableWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  date: PropTypes.string.isRequired,
  orderNumber: PropTypes.string.isRequired,
  setDelivery: PropTypes.func.isRequired,
  setPreparing: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
};
