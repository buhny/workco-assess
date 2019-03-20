import React from 'react';
import Icons from './icons/Icons'

const isCartEmpty = props => Object.entries(props.cartQtys).length === 0 && props.cartQtys.constructor === Object;


const CartStatus = props => {

  const cartQty = cartQtyObj => Object.values(cartQtyObj).reduce((a, b) => a + b);
  const cartStatusText = isCartEmpty(props) ? 'Your cart is empty' : `x ${cartQty(props.cartQtys)}`;

  return (
    <div className="cart-status">
      <Icons name="cart" width="17px" className="icon--cart" />
      <span className="cart-status__text">{ cartStatusText }</span>
    </div>
  )
};

export default CartStatus;
