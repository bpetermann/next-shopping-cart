import classes from './MainHeader.module.css';
import Link from 'next/link';
import { CartBadge, WishlistBadge } from '../ui/Badge';

const MainHeader = () => {
  return (
    <header className={classes['container']}>
      <Link href='/products'>
        <a className={classes['products-link']}> Shopping Cart</a>
      </Link>
      <div className={classes.btnContainer}>
        <WishlistBadge />
        <CartBadge />
      </div>
    </header>
  );
};

export default MainHeader;
