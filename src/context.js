import React, { useState } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

const ProductProvider = (props) => {
  const [products, setProducts] = useState(storeProducts);
  const [productInfo, setProductInfo] = useState(detailProduct);

  const handleDetail = () => {
    console.log('hello from details');
  };
  const addToCart = () => {
    console.log('hello from add to cart');
  };

  const initialState = {
    products,
    productInfo,
  };

  return (
    <ProductContext.Provider
      value={{
        ...initialState,
        // ...products,
        // ...productInfo,
        handleDetail,
        addToCart,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

// import React, { Component } from 'react';
// import { storeProducts, detailProduct } from './data';

// const ProductContext = React.createContext();

// class ProductProvider extends Component {
//   state = {
//     products: storeProducts,
//     productInfo: detailProduct,
//   };
//   handleDetail = () => {
//     console.log('hello from details');
//   };
//   addToCart = () => {
//     console.log('hello from add to cart');
//   };
//   render() {
//     return (
//       <ProductContext.Provider
//         value={{
//           ...this.state,
//           handleDetail: this.handleDetail,
//           addToCart: this.addToCart,
//         }}
//       >
//         {this.props.children}
//       </ProductContext.Provider>
//     );
//   }
// }

// const ProductConsumer = ProductContext.Consumer;

// export { ProductProvider, ProductConsumer };
