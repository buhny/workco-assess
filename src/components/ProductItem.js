import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import ProductImage from './ProductImage'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className="product product__list-item">
    <ProductImage prodId={product.id} alt={product.title} />
    <Product
      title={product.title}
      price={product.price}
      inventory={product.inventory} />
    <div className="product__btn">
      <button
        className="cta light-on-dark-text"
        onClick={onAddToCartClicked}
        disabled={product.inventory > 0 ? '' : 'disabled'}>
        {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
      </button>
    </div>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
