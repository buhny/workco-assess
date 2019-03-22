import React from 'react'
import PropTypes from 'prop-types'

import Product from './Product'
import Icons from './icons/Icons'
import ProductImage from './ProductImage'
import CartTotals from './CartTotals'

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
      <div className="cart--item" key={product.id}>
        <ProductImage prodId={product.id} alt={product.productTitle} />
        <Product
          title={product.productTitle}
          price={product.price.value}
          quantity={product.quantity}
        />
        <button className="btn--remove">Remove</button>
        <div className="qty-ticker">
        <Icons name="minus" fill="red" className="icon--minus" />
        QtyTicker
        <Icons name="plus" width="20px" fill="green" className="icon--plus" />
        </div>
      </div>
    )
  ) : (
    showEmptyCart()
  )

  const showTotals = hasProducts ? (
    <CartTotals subtotal={total} />
  ) : null;

  return (
    <section className="cart-wrapper">
      <button className="btn-close">
        <Icons name="close" className="icon--close" />
      </button>
      <h3>Your cart</h3>
      <div className="cart--pop">
        {nodes}
        {showTotals}
        <button
          className="btn--checkout light-on-dark-text"
          onClick={onCheckoutClicked}
          disabled={hasProducts ? '' : 'disabled'}>
          Checkout
        </button>
      </div>
    </section>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
