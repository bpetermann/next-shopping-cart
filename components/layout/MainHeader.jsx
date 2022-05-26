import React from 'react';
import classes from './MainHeader.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from '@mui/material';

const MainHeader = () => {
  return (
    <header>
      <div className={classes['container']}>
        <Link className={classes['products-link']}
         href='/products'>Shopping Cart</Link>
      </div>
      <div className={classes['searchbar']}>
        <button className={classes['toggle-button']}>
          <span className={classes['toggle-button-bar']}></span>
          <span className={classes['toggle-button-bar']}></span>
          <span className={classes['toggle-button-bar']}></span>
        </button>
        <input
          className={classes['search-input']}
          type='text'
          placeholder='Search'
        />
      </div>
    </header>
  );
};

export default MainHeader;
