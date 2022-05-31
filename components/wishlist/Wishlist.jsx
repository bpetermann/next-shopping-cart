import React, { useContext } from 'react';
import classes from './Wishlist.module.css';
import Backdrop from '../modal/Backdrop';
import WishlistItems from './WishlistItems';
import WishlistContext from '../../store/wishlist-context';

const Wishlist = () => {
  const wishlistCtx = useContext(WishlistContext);

  return (
    <>
      <Backdrop onClose={wishlistCtx.wishlistToggle} />
      <div className={classes.container}>
        <div className={classes.btnContainer}>
          <button
            onClick={wishlistCtx.wishlistToggle}
            className={classes.closeWishlistBtn}
          >
            X
          </button>
        </div>
        <WishlistItems />
      </div>
    </>
  );
};

export default Wishlist;
