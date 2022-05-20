import React from 'react';
import classes from './MainHeader.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';

const MainHeader = () => {
  return (
    <header>
      <div className={classes['container']}>
        <h2>Shopping Cart</h2>
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
