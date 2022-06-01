import classes from './Commercial.module.css';
import Link from 'next/link';

const Commercial = () => {
  return (
    <>
      <Link href='/products'>
        <a>
          <video autoPlay muted loop className={classes['video-commercial']}>
            <source src='/videos/commercial.mp4' type='video/mp4' />
          </video>
        </a>
      </Link>
      <div className={classes['entry-link']}>
        <Link href='/products'>Explore </Link>
      </div>
    </>
  );
};

export default Commercial;
