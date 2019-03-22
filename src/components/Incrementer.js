import React from 'react';
import Icons from './icons/Icons'

const Incrementer = ({qty, cb}) => {
  let newQty = qty;

  return (
    <div className="incrementer">
      <button
        className="incrementer__decrement"
        disabled={null}
        onClick={null}>
        <Icons name="minus" className="icon icon--minus" />
      </button>
      <input type="text" className="incrementer__qty" value={ newQty }></input>
      <button
        className="incrementer__increment"
        disabled={null}
        onClick={null}>
        <Icons name="plus" className="icon icon--plus" />
      </button>
    </div>

  );
}

export default Incrementer;
