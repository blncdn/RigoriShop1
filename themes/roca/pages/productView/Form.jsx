/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-param-reassign */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import produce from 'immer';
import Area from '@components/common/Area';
import { Form } from '@components/common/form/Form';
import { Field } from '@components/common/form/Field';
import Button from '@components/common/form/Button';
import './Form.scss';
import { useAppDispatch, useAppState } from '@components/common/context/app';
import { _ } from '@evershop/evershop/src/lib/locale/translate';
import ProductNoThumbnail from '@components/common/ProductNoThumbnail';

function ToastMessage({ thumbnail, name, qty, count, cartUrl, toastId }) {
  return (
    <div className="toast-mini-cart">
      <div className="top-head grid grid-cols-2">
        <div className="self-center">{_('JUST ADDED TO YOUR CART')}</div>
        <div className="self-center close flex justify-end">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toast.dismiss(toastId);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="item-line flex justify-between">
        <div className="popup-thumbnail flex justify-center items-center">
          {thumbnail ? (
            <img src={thumbnail} alt={name} />
          ) : (
            <ProductNoThumbnail width={25} height={25} />
          )}
        </div>
        <div className="item-info flex justify-between">
          <div className="name">
            <span className="font-bold">{name}</span>
          </div>
          <div>{_('QTY: ${qty}', { qty })}</div>
        </div>
      </div>
      <a className="add-cart-popup-button" href={cartUrl}>
        {_('VIEW CART (${count})', { count })}
      </a>
      <a
        className="add-cart-popup-continue text-center underline block"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          toast.dismiss(toastId);
        }}
      >
        {_('Continue Shopping')}
      </a>
    </div>
  );
}

ToastMessage.propTypes = {
  cartUrl: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  toastId: PropTypes.string.isRequired
};

function AddToCart({ stockAvaibility, loading = false, error }) {
  return (
    <>
       <div className="add-to-cart mt-2">
         {stockAvaibility === true && (     
           <div>
        <div className='qty-info-single-aviable'><svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 700 512"
        className="h-6 w-6"
        fill="green"
          stroke="currentColor">          
       <path strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2} d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg> Verfügbar</div>
          <div className='shipping-info-single'><span>Versandfertig in 1-2 Tagen</span>
       </div>  </div>
 )}
         {stockAvaibility === false && (
          <div className='qty-info-single-div'>
            <div className='qty-info-single-div-2'>
        <div className='qty-info-single-soldout'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 512" className="h-6 w-6"
          fill="red"
          stroke="currentColor"><path strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2} d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg><span>Nicht verfügbar</span></div>
       </div>
  </div>
  
     )}

      <div style={{ width: '8rem' }}>
        <Field
          type="hidden"
          value="1"
          validationRules={['notEmpty']}
          className="qty"
          name="qty"
          placeholder={_('Qty')}
          formId="productForm"
        />
      </div>
      {error && <div className="text-critical mt-1">{error}</div>}
      <div className="mt-2">
        {stockAvaibility === true && (
          <Button
            title={_('ADD TO CART')}
            outline
            isLoading={loading}
            onAction={() => {
              document
                .getElementById('productForm')
                .dispatchEvent(
                  new Event('submit', { cancelable: true, bubbles: true })
                );
            }}
          />
        )}
        {stockAvaibility === false && (
          <Button title={_('SOLD OUT')} onAction={() => {}} />
        )}
      </div>
    </div>
    </>  
  );
}

AddToCart.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  stockAvaibility: PropTypes.bool.isRequired
};

AddToCart.defaultProps = {
  error: undefined
};

export default function ProductForm({ product, action }) {
  const [loading, setLoading] = useState(false);
  const [toastId, setToastId] = useState();
  const [error, setError] = useState();
  const appContext = useAppState();
  const { setData } = useAppDispatch();

  const onSuccess = (response) => {
    if (!response.error) {
      setData(
        produce(appContext, (draff) => {
          draff.cart = appContext.cart || {};
          draff.cart.totalQty = response.data.count;
          draff.cart.uuid = response.data.cartId;
        })
      );
      setToastId(
        toast(
          <ToastMessage
            thumbnail={response.data.item.thumbnail}
            name={product.name}
            qty={response.data.item.qty}
            count={response.data.count}
            cartUrl="/cart"
            toastId={`${toastId}-${Math.random().toString(36).slice(2)}`}
          />,
          { closeButton: false }
        )
      );
    } else {
      setError(response.error.message);
    }
  };

  return (
    <Form
      id="productForm"
      action={action}
      method="POST"
      submitBtn={false}
      onSuccess={onSuccess}
      onStart={() => setLoading(true)}
      onComplete={() => setLoading(false)}
      onError={(e) => setError(e.message)}
      isJSON
    >
      <input type="hidden" name="sku" value={product.sku} />
      <Area
        id="productSinglePageForm"
        coreComponents={[
          {
            component: { default: AddToCart },
            props: {
              stockAvaibility: product.inventory.isInStock,
              loading,
              error
            },
            sortOrder: 50,
            id: 'productSingleBuyButton'
          }
        ]}
      />
    </Form>
  );
}

ProductForm.propTypes = {
  action: PropTypes.string.isRequired,
  product: PropTypes.shape({
    inventory: PropTypes.shape({
      isInStock: PropTypes.bool.isRequired
    }).isRequired,
    name: PropTypes.string.isRequired,
    sku: PropTypes.string.isRequired
  }).isRequired
};

export const layout = {
  areaId: 'productPageMiddleRight',
  sortOrder: 40
};

export const query = `
  query Query {
    product(id: getContextValue('productId')) {
      productId
      sku
      name
      gallery {
        thumb
      }
      inventory {
        isInStock
      }
    }
    action:url (routeId: "addMineCartItem")
  }
`;

