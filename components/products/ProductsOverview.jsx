import classes from './ProductsOverview.module.css';
import Footer from '../layout/Footer';
import Image from 'next/image';
import ProductsOverviewItem from './ProductsOverviewItem';

const ProductsOverview = ({ selectedItems }) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes['intro-container']}>
          <div className={classes.advertise}>
            <h2>DROP 02 SUMMER 2022</h2>
            <p>The 3 Pairs of Shoes You Need for this Summer</p>
          </div>
          <Image
            src='/images/model.png'
            alt='Sneaker Model'
            className={classes['model-image']}
            width={278}
            height={425}
          />
        </div>
        <div className={classes['products-container']}>
          {<ProductsOverviewItem products={selectedItems} />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsOverview;
