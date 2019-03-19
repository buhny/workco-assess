import React from 'react'
import PropTypes from 'prop-types'

import Icons from './icons/Icons'

const ProductsList = ({ title, children }) => (
  <div className="products">
    <header className="store__header">
      <h1>{title}</h1>
      <div className="cart-status">
        <Icons name="cart" width="17px" className="icon--cart" /> <span className="cart-status__text">Your cart is empty</span>
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
