import React from 'react'

const CartTotals = ({subtotal}) => {
  return (
      <div>
      <div>Subtotal &#36;{subtotal}</div>
      <div>Taxes &#36;40.34</div>
      <div>Total: &#36;{subtotal}</div>
      <button>Update</button>
    </div>
  );
}

export default CartTotals;
