import PropTypes from 'prop-types';
import React from 'react';

export function Price({ regular, special }) {
  return (
    <h4 className="product-single-price">
      {special.value === regular.value && (
        <div>
          <span className="sale-price">{regular.text} <div className='price-tax-info'><span>Alle Preise inkl. MwSt., zzgl. Versandkosten</span></div></span>
        </div>
      )}
      {special.value < regular.value && (
        <div>
          <span className="sale-price">{special.text}</span>{' '}
          <span className="regular-price">{regular.text}</span>
        </div>
      )}
    </h4>
  );
}

Price.propTypes = {
  regular: PropTypes.shape({
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  special: PropTypes.shape({
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};
