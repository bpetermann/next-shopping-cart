import React, { useContext } from 'react';
import classes from './ProductsOverviewItem.module.css';
import Image from 'next/image';
import { Link } from '@mui/material';
import CartContext from '../../store/cart-context';
import WishlistContext from '../../store/wishlist-context';

const ProductsOverviewItem = ({ products }) => {
  const { addToCart } = useContext(CartContext);
  const { wishlistItems, removeFromWishlist, addToWishlist } =
    useContext(WishlistContext);

  return (
    <>
      {products.map((item) => {
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
            {wishlistItems.includes(item) ? (
              <button
                className={classes['wishlist-button']}
                onClick={() => removeFromWishlist(item)}
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
                onClick={() => addToWishlist(item)}
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
            <button className={classes.button} onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ProductsOverviewItem;
