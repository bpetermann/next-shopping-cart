import classes from './ProductsOverview.module.css';
import Footer from '../layout/Footer';

const ProductsOverview = () => {
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
            className={classes.image}
          />
        </div>
        <div className={classes['product-item-container']}></div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsOverview;
