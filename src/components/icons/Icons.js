import React from 'react';

import CartIcon from './CartIcon'
import CloseIcon from './CloseIcon'
import MinusIcon from './MinusIcon'
import PlusIcon from './PlusIcon'

const Icons = props => {
  switch (props.name) {
    case "cart":
      return <CartIcon {...props} />;
    case "close":
      return <CloseIcon {...props} />;
    case "minus":
      return <MinusIcon {...props} />;
    case "plus":
      return <PlusIcon {...props} />;
    default:
      return;
  }
};

export default Icons;
