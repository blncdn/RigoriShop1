import PropTypes from 'prop-types';
import React from 'react';

function Price({ regular, special, stockAvaibility }) {
  return (
    <div className="product-price-listing">
      {regular.value === special.value && (
        <div>
          <span className="sale-price font-semibold">{regular.text}</span>
        </div>
      )}
         {stockAvaibility === false && (
         <span className="sale-price text-critical font-semibold">Ausverkauft</span>    
        )}
      {special.value < regular.value && (
        <div>
          <span className="sale-price text-critical font-semibold">
            {special.text}
          </span>{' '}
          <span className="regular-price font-semibold">{regular.text}</span>
        </div>
      )}
    </div>
  );
}

Price.propTypes = {
  regular: PropTypes.shape({
    value: PropTypes.number,
    text: PropTypes.string
  }).isRequired,
  special: PropTypes.shape({
    value: PropTypes.number,
    text: PropTypes.string
  }).isRequired
};

export { Price };

