import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const { id, title, img, price, inCart } = product;
  return (
    <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
      <div className='card'>
        <div
          className='img-container p-5'
          onClick={() => console.log('You Clicked Me On Image Container!!!')}
        >
          <Link to='/details'>
            <img src={img} alt='product' className='card-img-top' />
          </Link>
          <button
            className='cart-btn'
            disabled={inCart ? true : false}
            onClick={() => {
              console.log('Added to the CART');
            }}
          >
            {inCart ? (
              <p className='text-capitalize mb-0' disabled>
                {''}
                in Cart
              </p>
            ) : (
              <i className='fas fa-cart-plus' />
            )}
          </button>
        </div>
        {/* car footer */}
        <div className='card-footer d-flex justify-content-between'>
          <p className='align-self-center mb-0'>{title}</p>
          <h5 className='text-blue font-italic mb-0'>
            <span className='mr-1'>$</span>
            {price}
          </h5>
        </div>
      </div>
    </ProductWrapper>
  );
};

const ProductWrapper = styled.div`
  ${'' /* background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  } */}
`;

export default Product;
