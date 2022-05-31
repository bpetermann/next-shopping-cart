import React, { useContext } from 'react';
import Image from 'next/image';
import classes from './ProductsOverview.module.css';
import Footer from '../layout/Footer';
import { Link } from '@mui/material';
import CartContext from '../../store/cart-context';
import WishlistContext from '../../store/wishlist-context';

const ProductsOverview = ({ selectedItems }) => {
  const cartCtx = useContext(CartContext);
  const wishlistCtx = useContext(WishlistContext);

  return (
    <>
      <div className={classes.container}>
        <div className={classes['intro-container']}>
          <div className={classes.advertise}>
            <h2>DROP 02 SUMMER 2022</h2>
            <p>The 3 Pairs of Shoes You Need for this Summer</p>
          </div>
          <img
            src='/images/model.png'
            alt='Sneaker Model'
            className={classes['model-image']}
          />
        </div>
        <div className={classes['products-container']}>
          {selectedItems.map((item) => {
            return (
              <div className={classes['product-item-container']} key={item.id}>
                <Link href={`/products/${item.id}`}>
                  <Image
                    src={`/images/${item.name}.png`}
                    alt={item.name}
                    className={classes['product-image']}
                    width={160}
                    height={224}
                  />
                </Link>
                {wishlistCtx.wishlistItems.includes(item) ? (
                  <button
                    className={classes['wishlist-button']}
                    onClick={() => wishlistCtx.removeFromWishlist(item)}
                  >
                    <div className={classes['wishlist-heart-button']}>
                      <Image
                        src={'/images/heart-full.png'}
                        alt={'Item is on your Wishlist'}
                        width={24}
                        height={24}
                      />
                    </div>
                  </button>
                ) : (
                  <button
                    className={classes['wishlist-button']}
                    onClick={() => wishlistCtx.addToWishlist(item)}
                  >
                    <div className={classes['heart-button']}>
                      <Image
                        src={'/images/heart.png'}
                        alt={'Add Item to your Wishlist'}
                        width={24}
                        height={24}
                      />
                    </div>
                  </button>
                )}
                <div>{item.description}</div>
                <div>{item.price} $</div>
                <button
                  className={classes.button}
                  onClick={() => cartCtx.addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsOverview;
