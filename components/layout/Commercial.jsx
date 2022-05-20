import React from 'react';
import classes from './Commercial.module.css';
import Link from 'next/link';

const Commercial = () => {
  return (
    <>
      <video
        // autoPlay
        muted
        loop
        className={classes['video-commercial']}
      >
        <source src='/videos/commercial.mp4' type='video/mp4' />
      </video>
      <div className={classes['entry-link']}>
        <Link href='/test'>Explore </Link>
      </div>
    </>
  );
};

export default Commercial;
