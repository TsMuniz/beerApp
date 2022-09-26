import PropTypes from 'prop-types';
import React from 'react';

export default function OrderStatusCard({ status, price, date, address, number }) {
  return (
    <div>
      <div>
        {number}
      </div>
      <div>
        <div>
          <span>{status}</span>
          <span>{date}</span>
          <span>{price}</span>
        </div>
        <div>
          <span>{address}</span>
        </div>
      </div>
    </div>
  );
}

OrderStatusCard.propTypes = {
  address: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
};
