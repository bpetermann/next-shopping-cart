import Head from 'next/head';
import classes from '../styles/404.module.css';
import Link from 'next/link';
import { GiRunningShoe } from 'react-icons/gi';

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Page Not found</title>
        <meta name='description' content="Sorry, we can't find that page!" />
      </Head>
      <div className={classes['container']}>
        <GiRunningShoe size={60} />
        <h2>
          Sorry, we can't find that page!
          <br /> You'll find loads to explore on the home page.
        </h2>
        <Link href='/products'>
          <a className={classes['homepage-link']}>Homepage</a>
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
