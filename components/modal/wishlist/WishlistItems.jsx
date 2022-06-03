import React, { useContext } from 'react';
import Image from 'next/image';
import CartContext from '../../../store/cart-context';
import classes from './WishlistItems.module.css';
import WishlistContext from '../../../store/wishlist-context';

const WishlistItems = () => {
  const { addToCart } = useContext(CartContext);
  const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);

  return (
    <>
      {wishlistItems.map((item) => {
        return (
          <div className={classes.container} key={item.id}>
            <img
              src={`/images/${item.name}.png`}
              alt={item.name}
              className={classes.image}
            />
            <button
              className={classes.wishlistBtn}
              onClick={() => removeFromWishlist(item)}
            >
              <div className={classes['wishlist-heart-button']}>
                <Image
                  src={'/images/heart-full.png'}
                  alt={'Add Item to your Wishlist'}
                  width={24}
                  height={24}
                />
              </div>
            </button>
            <div className={classes.description}>{item.description}</div>
            <div className={classes.price}>{item.price} $</div>
            <button className={classes.button} onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        );
      })}
    </>
  );
};

export default WishlistItems;
