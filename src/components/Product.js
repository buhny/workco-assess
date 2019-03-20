import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title }) => (
  <div className="product__desc">
    <h2 className="product__title">{title}</h2>
    <div className="product__qty">{inventory ? `${inventory} Remaining` : null}</div>
    {/*
      I think there could be better messaging than showing null for no inventory,
      ie: "Backordered," "Coming Soon," "Sorry, check back soon!," etc.
    */}
    <div className="product__price">&#36;{price}</div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
