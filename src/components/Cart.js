import React from 'react'
import PropTypes from 'prop-types'

import Product from './Product'
import Icons from './icons/Icons'

const showEmptyCart = () => (
    <div className="cart--empty">
      <Icons name="cart" fill="#9b9b9b" className="icon--cart" />
      <p>Please add some products to your cart.</p>
    </div>
);

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    showEmptyCart()
  )

  const showTotals = hasProducts ? (
    <div>
      <Icons name="minus" fill="red" className="icon--minus" />
      <Icons name="plus" width="20px" fill="green" className="icon--plus" />

      <p>Total: &#36;{total}</p>
      <button onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  ) : null;

  return (
    <div className="cart-wrapper">
      <button className="btn-close">
        <Icons name="close" className="icon--close" />
      </button>
      <h3>Your cart</h3>
      <div className="cart-nodes">{nodes}</div>
      {showTotals}
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
