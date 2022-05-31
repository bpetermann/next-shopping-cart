import React from 'react';
import classes from './MainHeader.module.css';
import { CartBadge, WishlistBadge } from '../ui/Badge';
import { Link } from '@mui/material';

const MainHeader = () => {
  return (
    <header className={classes['container']}>
      <Link className={classes['products-link']} href='/products'>
        Shopping Cart
      </Link>
      <div className={classes.btnContainer}>
        <WishlistBadge />
        <CartBadge />
      </div>
    </header>
  );
};

export default MainHeader;
