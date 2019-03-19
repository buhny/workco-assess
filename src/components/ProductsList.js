import React from 'react'
import PropTypes from 'prop-types'

const ProductsList = ({ title, children }) => (
  <div className="products">
    <header className="store__header">
      <h1>{title}</h1>
      <div className="cart-status">
        <span className="cart-status__icon">cart icon</span> <span className="cart-status__text">Your cart is empty</span>
      </div>
    </header>
    <main className="products__list">{children}</main>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
