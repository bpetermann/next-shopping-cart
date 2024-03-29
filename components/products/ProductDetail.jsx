import React, { useContext, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import classes from './ProductDetail.module.css';
import Image from 'next/image';
import AddToCartBtn from '../ui/AddToCartBtn';
import Accordion from '../ui/Accordion';
import Footer from '../layout/Footer';
import { RiTruckLine } from 'react-icons/ri';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { GoPackage } from 'react-icons/go';
import { AverageRating, YourRating } from '../ui/Rating';
import CartContext from '../../store/cart-context';

async function addProductRating(value, id, user) {
  const response = await fetch('/api/ratings', {
    method: 'POST',
    body: JSON.stringify({ rating: value, id: id, user: user }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
}

const ProductDetail = ({ item }) => {
  const { data: session } = useSession();
  const { addToCart } = useContext(CartContext);
  const [rating, setRating] = useState(null);
  const { name, description, price, id } = item;

  const productRatingHandler = async (value) => {
    try {
      const result = await addProductRating(value, id, session.user.email);
      toast.success(result.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetch(`/api/ratings/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRating(data.rating);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className={classes['container']}>
        <div className={classes['image-container']}>
          <Image
            src={`/images/products/${name}.png`}
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
            {session && <YourRating productRating={productRatingHandler} />}
            {rating && (
              <AverageRating
                average={rating.average}
                ratings={rating.userRatings}
              />
            )}
          </div>
          <form
            className={classes['product-order-form']}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <select>
              <option value='one'>One Size</option>
            </select>
            <AddToCartBtn product={item} btnStyle={'form-add-btn'} />
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
            headline={['Help & Contact', 'Gift cards', 'Shipping']}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
