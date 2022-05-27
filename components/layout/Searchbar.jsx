import React from 'react';
import classes from './Searchbar.module.css';

const Searchbar = ({ onChangeSearchTerm }) => {
  const searchTermHandler = (event) => {
    onChangeSearchTerm(event.target.value);
  };

  return (
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
        onChange={searchTermHandler}
      />
    </div>
  );
};

export default Searchbar;
