import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import classes from './MainHeader.module.css';
import Link from 'next/link';
import { CartBadge, WishlistBadge } from '../ui/Badge';
import { BsFillTriangleFill, BsFillPersonFill } from 'react-icons/bs';
import IconButton from '@mui/material/IconButton';

const MainHeader = () => {
  const [showNavItems, setShowNavItems] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.pathname.includes('products')
      ? setShowNavItems(true)
      : setShowNavItems(false);
  }, [router.pathname]);

  return (
    <header className={classes['container']}>
      <Link href='/products'>
        <a className={classes['products-link']}>
          <BsFillTriangleFill size={20} className={classes['logo-icon']} />
          shopping cart
        </a>
      </Link>
      {showNavItems && (
        <div className={classes['nav-container']}>
          <Link href='/auth'>
            <IconButton>
              <BsFillPersonFill
                size={24}
                className={classes['auth-user-icon']}
              />
            </IconButton>
          </Link>
          <WishlistBadge />
          <CartBadge />
        </div>
      )}
    </header>
  );
};

export default MainHeader;
