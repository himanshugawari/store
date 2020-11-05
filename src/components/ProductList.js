import React, { Fragment } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';

const ProductList = () => {
  return (
    <Fragment>
      <div className='py-5'>
        <div className='container'>
          <div className='row'>
            <Title name='our' title='products' />
            <div className='row'>
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    {
                      /* console.log(product); */
                    }
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
    // <Product />
  );
};

export default ProductList;
