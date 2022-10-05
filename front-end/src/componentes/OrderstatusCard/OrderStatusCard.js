import PropTypes from 'prop-types';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.scss';
import StatusTag from '../StatusTag/StatusTag';

export default function OrderStatusCard({ id,
  status,
  price,
  date,
  address,
  number,
  prefixId,
  redirect,
}) {
  const location = useLocation();
  return (
    <Link
      to={ `/${redirect}/orders/${id}` }
      className={ styles.cardContainer }
    >
      <div
        className={ styles.orderNumber }
        data-testid={ `${prefixId}__element-order-id-${id}` }
      >
        Pedido
        {number}
      </div>
      <div>
        <div
          className={ styles.cardLeft }
        >
          <StatusTag
            data-testid={ `${prefixId}__element-delivery-status-id-${id}` }
            Orderstatus={ status }
          >
            {status}
          </StatusTag>
          <div className={ styles.cardLeftSeparator }>
            <span
              data-testid={ `${prefixId}__element-order-date-${id}` }
            >
              {date}
            </span>
            <span
              data-testid={ `${prefixId}__element-card-price-${id}` }
            >
              R$
              {' '}
              {price.replace('.', ',')}
            </span>
          </div>
        </div>
        <div>
          {
            location.pathname === '/seller/orders' && (
              <span
                data-testid={ `${prefixId}__element-card-address-${id}` }
              >
                {address}
              </span>
            )
          }
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
