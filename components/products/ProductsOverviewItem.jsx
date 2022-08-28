import React, { useContext } from 'react';
import classes from './ProductsOverviewItem.module.css';
import Image from 'next/image';
import AddToCartBtn from '../ui/AddToCartBtn';
import { Link } from '@mui/material';
import StyledIcon from '../ui/StyledIcon';
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
                src={`/images/products/${item.name}.png`}
                alt={item.name}
                className={classes['product-image']}
                width={160}
                height={224}
              />
            </Link>
            {wishlistItems.includes(item) ? (
              <StyledIcon onClick={() => removeFromWishlist(item)}>
                <FavoriteIcon className={classes['wishlist-heart-button']} />
              </StyledIcon>
            ) : (
              <StyledIcon onClick={() => addToWishlist(item)}>
                <FavoriteIcon />
              </StyledIcon>
            )}
            <div>{item.description}</div>
            <div className={classes['item-price']}>{item.price} $</div>
            <AddToCartBtn product={item} btnStyle={'add-btn'} />
          </div>
        );
      })}
    </>
  );
};

export default ProductsOverviewItem;
