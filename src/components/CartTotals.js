import React from 'react'

const taxRate = 0.0806783;

const CartTotals = ({subtotal}) => {

  const subtotalNum = parseFloat(subtotal);
  const tax = parseFloat((subtotalNum * taxRate).toFixed(2));

  return (
    <div className="cart__totals">
      <table>
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>{subtotalNum.toFixed(2)}</td>
          </tr>
          <tr className="taxes">
            <td>Taxes</td>
            <td>{tax}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>{(subtotalNum + tax).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CartTotals;
