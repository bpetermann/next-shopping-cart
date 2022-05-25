import classes from './ProductsOverview.module.css';
import Footer from '../layout/Footer';

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
                <img
                  src={`/images/${item.name}.png`}
                  alt={item.name}
                  className={classes['product-image']}
                />
                <button className={classes['wishlist-button']}>
                  <img
                    src={'/images/heart.png'}
                    alt={'Add Item to your Wishlist'}
                    className={classes['heart-button']}
                  />
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
