import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export default function OrderStatusCard({ id, status, price, date, address, number }) {
  return (
    <Link
      to={ `/seller/orders/${id}` }
      className={ styles.cardContainer }
    >
      <div
        className={ styles.orderNumber }
        data-testid={ `seller_orders__element-order-id-${id}` }
      >
        {number}
      </div>
      <div>
        <div>
          <span
            data-testid={ `seller_orders__element-delivery-status-id-${id}` }
          >
            {status}
          </span>
          <span
            data-testid={ `seller_orders__element-order-date-${id}` }
          >
            {date}
          </span>
          <span
            data-testid={ `seller_orders__element-card-price-${id}` }
          >
            {price}
          </span>
        </div>
        <div>
          <span
            data-testid={ `seller_orders__element-card-address-${id}` }
          >
            {address}
          </span>
        </div>
      </div>
    </Link>
  );
}

OrderStatusCard.propTypes = {
  address: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};