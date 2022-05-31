import React, { useContext } from 'react';
import classes from './ProductDetail.module.css';
import Image from 'next/image';
import Accordion from '../ui/Accordion';
import Footer from '../layout/Footer';
import { RiTruckLine } from 'react-icons/ri';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { GoPackage } from 'react-icons/go';
import { YourRating, AverageRating } from '../ui/Rating';
import { useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';

const ProductDetail = ({ name, description, price, id, amount }) => {
  const cartCtx = useContext(CartContext);
  const [rating, setRating] = useState(null);

  const productRatingHandler = (value) => {
    const reqBody = { rating: value, id: id };

    fetch('/api/ratings', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    fetch(`/api/ratings/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRating(data.rating);
      });
  }, []);

  return (
    <>
      <div className={classes['container']}>
        <div className={classes['image-container']}>
          <Image
            src={`/images/${name}.png`}
            alt={name}
            className={classes['product-image']}
            width={500}
            height={500}
          />
        </div>
        <div className={classes['product-container']}>
          <h2 className={classes['product-name']}>{name}</h2>
          <p className={classes['product-description']}>{description}</p>
          <p>€{price}</p>
          <div className={classes['product-rating']}>
            {rating && (
              <AverageRating
                average={rating.average}
                ratings={rating.userRatings}
              />
            )}
            <YourRating productRating={productRatingHandler} />
          </div>
          <form className={classes['product-order-form']}>
            <select>
              <option value='one'>One Size</option>
            </select>
            <button
              onClick={(e) => {
                e.preventDefault();
                cartCtx.addToCart({ name, description, price, id, amount });
              }}
            >
              Add to Cart
            </button>
          </form>
          <table className={classes['product-table']}>
            <tbody>
              <tr>
                <td>
                  <RiTruckLine
                    size={22}
                    className={classes['product-table-icons']}
                  />
                  Standard Delivery <br />
                  <p>2-4 business days</p>
                </td>
              </tr>
              <tr>
                <td>
                  <GoPackage
                    size={22}
                    className={classes['product-table-icons']}
                  />
                  30 days return policy
                </td>
              </tr>
              <tr>
                <td>
                  <BsArrowReturnLeft
                    size={22}
                    className={classes['product-table-icons']}
                  />
                  Free Shipping &amp; Returns
                </td>
              </tr>
            </tbody>
          </table>
          <Accordion
            headline={['Materials & Care', 'Quality', 'Delivery & Returns']}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
