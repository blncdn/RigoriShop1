import PropTypes from 'prop-types';
import React from 'react';

export function Sku({ sku }) {
  return (
    <div className="product-single-sku text-textSubdued text-center">
      {/* <span>Artikelnummer</span> */}
      {/* <span>: </span> */}
      {sku}
    </div>
  );
}

Sku.propTypes = {
  sku: PropTypes.string.isRequired
};
