import React from 'react'
import PropTypes from 'prop-types'

import CartStatus from './CartStatus'

const ProductsList = ({ title, children, cartQtys }) => (
  <div className="products">
    <header className="store__header">
      <h1>{title}</h1>
      <CartStatus cartQtys={cartQtys} />
    </header>
    <main className="products__list">{children}</main>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
