import React from 'react'
import PropTypes from 'prop-types'

import Product from './Product'
import Icons from './icons/Icons'
import ProductImage from './ProductImage'
import CartTotals from './CartTotals'
import Incrementer from './Incrementer'

const showEmptyCart = () => (
    <div className="cart--empty">
      <Icons name="cart" fill="#9b9b9b" className="icon--cart" />
      <p>Please add some products to your cart.</p>
    </div>
);

const Cart  = ({ products, total, onCheckoutClicked, onRemoveClicked, onIncrementClicked, onDecrementClicked, onUpdateClicked, onCloseClicked, isCartHidden }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <div className="cart__item" key={product.id}>
        <ProductImage prodId={product.id} alt={product.productTitle} />
        <Product
          title={product.productTitle}
          price={product.price.value}
          quantity={product.quantity}
        />
        <div className="cart__remove">
          <button
            className="btn--remove"
            onClick={() => onRemoveClicked(product)}
          >
            Remove
          </button>
        </div>
        <Incrementer
          inv={product.inventory}
          qty={product.quantity}
          displayQty={product.displayQty}
          onIncrementClicked={() => onIncrementClicked(product.id)}
          onDecrementClicked={() => onDecrementClicked(product.id)}
        />
      </div>
    )
  ) : (
    showEmptyCart()
  )

  return (
    <div className={`cart__bg ${isCartHidden ? 'hidden' : ''}`}>
      <section className={`cart-wrapper ${isCartHidden ? 'hidden' : ''}`}>
        <button className="btn-close" onClick={onCloseClicked}>
          <Icons name="close" className="icon--close" />
        </button>
        <h3>Your cart</h3>
        <div className="cart--pop">
          <div className="cart__items">
            {nodes}
          </div>
          { hasProducts ? (
            <div className="cart__bill">
              <CartTotals subtotal={total} />
              <button
                className="btn--update"
                disabled={ null/* disable unless quantities change */}
                onClick={ onUpdateClicked }>Update</button>
              <button
                className="btn--checkout light-on-dark-text"
                onClick={onCheckoutClicked}
                disabled={hasProducts ? '' : 'disabled'}>
                Checkout
              </button>
            </div>
          ) : null }

        </div>
      </section>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
