import React from 'react';
import Icons from './icons/Icons'

const checkCartQty = props => Object.entries(props.cartQtys).length === 0 && props.cartQtys.constructor === Object;

const showCartClicked = () => {
  return null;
}

const CartStatus = props => {

  const cartQty = cartQtyObj => Object.values(cartQtyObj).reduce((a, b) => a + b);
  const isCartEmpty = checkCartQty(props);
  const cartStatusText = isCartEmpty ? 'Your cart is empty' : `x ${cartQty(props.cartQtys)}`;

  return (
    <button
      className="cart-status"
      disabled={isCartEmpty ? 'disabled' : ''}
      onClick={showCartClicked}>
      <Icons name="cart" width="17px" className="icon--cart" />
      <span className="cart-status__text">{ cartStatusText }</span>
    </button>
  )
};

export default CartStatus;
