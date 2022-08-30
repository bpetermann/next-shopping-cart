import classes from './AddToCartBtn.module.css';
import { useState, useContext } from 'react';
import CartContext from '../../store/cart-context';
import Image from 'next/image';

const AddButton = ({ product, btnStyle }) => {
  const [isLoading, setisLoading] = useState(false);
  const [productWasAdded, setProductWasAdded] = useState(false);
  const cartCtx = useContext(CartContext);

  const buttonClasses = `${classes[btnStyle]} ${
    productWasAdded && classes['added']
  }`;

  const addToCartHandler = (product) => {
    cartCtx.addToCart(product);
    setisLoading(true);
    setTimeout(() => {
      setisLoading(false);
      setProductWasAdded(true);
      setTimeout(() => {
        setProductWasAdded(false);
      }, 750);
    }, 500);
  };

  return (
    <button
      className={buttonClasses}
      onClick={() => {
        addToCartHandler(product);
      }}
    >
      {isLoading ? (
        <div className={classes['loading-container']}>
          <Image
            src={`/images/spinner.gif`}
            alt={'Add to Cart'}
            className={classes['loading']}
            width={22}
            height={22}
          />
        </div>
      ) : (
        <>Add to Cart</>
      )}
    </button>
  );
};

export default AddButton;
