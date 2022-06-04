import React, { useContext } from 'react';
import classes from './ProductsOverviewItem.module.css';
import Image from 'next/image';
import { Link } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
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
              <IconButton
                className={classes['wishlist-button']}
                onClick={() => removeFromWishlist(item)}
              >
                <FavoriteIcon className={classes['wishlist-heart-button']} />
              </IconButton>
            ) : (
              <IconButton
                className={classes['wishlist-button']}
                onClick={() => addToWishlist(item)}
              >
                <FavoriteIcon />
              </IconButton>
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
