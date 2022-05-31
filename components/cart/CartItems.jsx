import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from './CartItems.module.css';

const CartItems = () => {
  const ctx = useContext(CartContext);

  return (
    <>
      {ctx.cartItems.map((item) => {
        return (
          <div key={item.name} className={classes.container}>
            <div>
              <h4>{item.name}</h4>
              <div className={classes.product}>
                <span>{(item.amount * item.price).toFixed(2)} $</span>
                <span>{item.amount}X</span>
              </div>
            </div>
            <div className={classes.quantityControl}>
              <button
                className={classes.button}
                onClick={() => ctx.addToCart(item)}
              >
                +
              </button>
              <button
                className={classes.button}
                onClick={() => ctx.removeFromCart(item)}
              >
                –
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CartItems;
