import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export default function OrderStatusCard({ id,
  status,
  price,
  date,
  address,
  number,
  prefixId,
  redirect,
}) {
  return (
    <Link
      to={ `/${redirect}/orders/${id}` }
      className={ styles.cardContainer }
    >
      <div
        className={ styles.orderNumber }
        data-testid={ `${prefixId}__element-order-id-${id}` }
      >
        {number}
      </div>
      <div>
        <div>
          <span
            data-testid={ `${prefixId}__element-delivery-status-id-${id}` }
          >
            {status}
          </span>
          <span
            data-testid={ `${prefixId}__element-order-date-${id}` }
          >
            {date}
          </span>
          <span
            data-testid={ `${prefixId}__element-card-price-${id}` }
          >
            {price}
          </span>
        </div>
        <div>
          <span
            data-testid={ `${prefixId}__element-card-address-${id}` }
          >
            {address}
          </span>
        </div>
      </div>
    </Link>
  );
}

OrderStatusCard.propTypes = {
  redirect: PropTypes.string.isRequired,
  prefixId: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
