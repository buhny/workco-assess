import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addToCart, openCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'
// import { getIsCartHidden } from '../reducers'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'

const ProductsContainer = ({ products, addToCart, cartQtys, openCart }) => (
  <ProductsList
    title="Acme Store"
    cartQtys={cartQtys}
    onOpenClicked={ () => openCart() }
    // isCartHidden={isCartHidden}
  >
    {products.map(product =>
      <ProductItem
        key={product.id}
        product={product}
        onAddToCartClicked={() => addToCart(product.id)}
      />
    )}
  </ProductsList>
)

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    productTitle: PropTypes.string.isRequired,
    price: PropTypes.shape({
      value: PropTypes.number.isRequired,
      currency: PropTypes.string
    }),
    inventory: PropTypes.number.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products),
  cartQtys: state.cart.quantityById
})

export default connect(
  mapStateToProps,
  { addToCart, openCart }
)(ProductsContainer)
