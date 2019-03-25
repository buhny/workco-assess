import React from 'react';
import Icons from './icons/Icons'

// Update incrementer qty separate from product qty
// Only update product qty if update button is clicked
// Reset incrementer qty if cart is closed

const Incrementer = ({inv, qty, displayQty, onIncrementClicked, onDecrementClicked}) => {
  const availableInv = inv + qty;

  return (
    <div className="incrementer">
      <button
        className="incrementer__decrement"
        disabled={displayQty > 0 ? '' : 'disabled'}
        onClick={onDecrementClicked}
      >
        <Icons name="minus" className="icon icon--minus" />
      </button>
      <input type="number" className="incrementer__qty" value={ displayQty } readOnly></input>
      <button
        className="incrementer__increment"
        disabled={inv > 0 && displayQty < availableInv ? '' : 'disabled'}
        onClick={onIncrementClicked}
      >
        <Icons name="plus" className="icon icon--plus" />
      </button>
    </div>

  );
}

export default Incrementer;
