import React, { useContext } from 'react';
import classes from './Wishlist.module.css';
import Backdrop from '../modal/Backdrop';
import WishlistItems from './WishlistItems';
import WishlistContext from '../../store/wishlist-context';

const Wishlist = () => {
  const { wishlistToggle } = useContext(WishlistContext);

  return (
    <>
      <Backdrop onClose={wishlistToggle} />
      <div className={classes.container}>
        <div className={classes.btnContainer}>
          <button onClick={wishlistToggle} className={classes.closeWishlistBtn}>
            X
          </button>
        </div>
        <WishlistItems />
      </div>
    </>
  );
};

export default Wishlist;
