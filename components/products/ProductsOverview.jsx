import Image from 'next/image';
import classes from './ProductsOverview.module.css';
import Footer from '../layout/Footer';
import { Link } from '@mui/material';

const ProductsOverview = ({ products }) => {
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
                <button className={classes['wishlist-button']}>
                  <div className={classes['heart-button']}>
                    <Image
                      src={'/images/heart.png'}
                      alt={'Add Item to your Wishlist'}
                      width={24}
                      height={24}
                    />
                  </div>
                </button>
                <div>{item.description}</div>
                <div>{item.price} $</div>
                <button className={classes.button}>Add to Cart</button>
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
