import classes from './Cart.module.css';
import React, { useContext } from 'react';
import Backdrop from '../modal/Backdrop';
import CartContext from '../../store/cart-context';
import CartItems from './CartItems';

const Cart = () => {
  const { cartItems, shoppingCartToggle } = useContext(CartContext);

  const totalPrice = cartItems.reduce(function (acc, item) {
    return acc + item.amount * item.price;
  }, 0);

  return (
    <React.Fragment>
      <Backdrop onClose={shoppingCartToggle} />
      <div className={classes.container}>
        <CartItems />
        {totalPrice > 0 && (
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalPrice.toFixed(2)} $</span>
          </div>
        )}
        {totalPrice > 0 ? (
          <button className={classes.orderButton}>Order</button>
        ) : (
          <button onClick={shoppingCartToggle} className={classes.orderButton}>
            No items (yet!)
          </button>
        )}
      </div>
    </React.Fragment>
  );
};

export default Cart;
