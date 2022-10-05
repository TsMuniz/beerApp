import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.scss';

export default function StatusTag({ Orderstatus }) {
  const status = Orderstatus !== 'Em Trânsito' ? Orderstatus : 'Preparando';
  console.log(status);
  return (
    <span
      className={ [styles.tagContainer, styles[status]].join(' ') }
    >
      {status}
    </span>
  );
}

StatusTag.propTypes = {
  Orderstatus: PropTypes.string.isRequired,
};
