import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

function ProductCard({ product, index, children }) {
  return (
    <div
      className={ styles.cardContainer }
      key={ `${product.name}${index}` }
    >
      <span
        data-testid={ `customer_products__element-card-price-${product.id}` }
        className={ styles.cardPrice }
      >
        {product.price.replace('.', ',')}
      </span>
      <div
        className={ styles.cardImageContainer }
      >
        <img
          src={ product.urlImage }
          alt={ product.name }
          width="100px"
          data-testid={ `customer_products__img-card-bg-image-${product.id}` }
        />
      </div>
      <div className={ styles.cardBottom }>
        <p
          className={ styles.cardTitle }
          data-testid={ `customer_products__element-card-title-${product.id}` }
        >
          {product.name}
        </p>
        {children}
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  index: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
