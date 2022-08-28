import styles from './AddToCartBtn.module.css';
import { useState, useContext } from 'react';
import CartContext from '../../store/cart-context';
import Image from 'next/image';

const AddButton = ({ product, btnStyle }) => {
  const [isLoading, setisLoading] = useState(false);
  const [productWasAdded, setProductWasAdded] = useState(false);
  const cartCtx = useContext(CartContext);

  const buttonClasses = `${styles[btnStyle]} ${
    productWasAdded && styles['added']
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
        <div className={styles['loading-container']}>
          <Image
            src={`/images/spinner.gif`}
            alt={'Add to Cart'}
            className={styles['loading']}
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
