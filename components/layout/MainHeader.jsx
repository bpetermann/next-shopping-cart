import classes from './MainHeader.module.css';
import Link from 'next/link';
import { CartBadge, WishlistBadge } from '../ui/Badge';
import { BsFillTriangleFill } from 'react-icons/bs';

const MainHeader = () => {
  return (
    <header className={classes['container']}>
      <Link href='/products'>
        <a className={classes['products-link']}>
          <BsFillTriangleFill size={20} className={classes['logo-icon']} />
          shopping cart
        </a>
      </Link>
      <div className={classes.btnContainer}>
        <WishlistBadge />
        <CartBadge />
      </div>
    </header>
  );
};

export default MainHeader;
