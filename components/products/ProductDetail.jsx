import classes from './ProductDetail.module.css';
import Image from 'next/image';

const ProductDetail = ({ name, description, id, price }) => {
  return (
    <div className={classes['container']}>
      <h2>{name}</h2>
    </div>
  );
};

export default ProductDetail;
