import React from 'react';
import classes from './MainHeader.module.css';
import { Link } from '@mui/material';

const MainHeader = () => {
  return (
    <header>
      <div className={classes['container']}>
        <Link className={classes['products-link']} href='/products'>
          Shopping Cart
        </Link>
      </div>
    </header>
  );
};

export default MainHeader;
