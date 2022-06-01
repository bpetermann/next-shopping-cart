import React, { useContext } from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CartContext from '../../store/cart-context';
import WishlistContext from '../../store/wishlist-context';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

function CartBadge() {
  const { shoppingCartToggle, cartItems } = useContext(CartContext);

  const totalCartItems = cartItems.reduce(function (acc, item) {
    return acc + item.amount;
  }, 0);

  return (
    <IconButton aria-label='cart' onClick={shoppingCartToggle}>
      <StyledBadge badgeContent={totalCartItems} color='warning'>
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}

function WishlistBadge() {
  const { wishlistToggle, wishlistItems } = useContext(WishlistContext);

  const totalWishlistItems = wishlistItems.length;

  return (
    <IconButton aria-label='cart' onClick={wishlistToggle}>
      <StyledBadge badgeContent={totalWishlistItems} color='warning'>
        <FavoriteIcon />
      </StyledBadge>
    </IconButton>
  );
}

export { CartBadge, WishlistBadge };
