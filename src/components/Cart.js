import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const showEmptyCart = () => (
    <div className="cart--empty">
      <div>cart icon</div>
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
      <p>Total: &#36;{total}</p>
      <button onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  ) : null;

  return (
    <div className="cart-wrapper">
      <button className="btn-close">X</button> {/* replace me with icon */}
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
