import React from 'react';

import { ProductCard } from './components/ProductCard/ProductCard';

import bagProductImage from './assets/image/bag-product.png';

import './App.css';


const App = () => {
  return (

    <div className="App">
      <ProductCard srcProduct={bagProductImage}
        discount={''}
        discountPrice={'1450'}
        title={'Портативная Медици...'}
        price={'1645'}
        ratingStarNumber={'4.7'}
        countSold={123} />
      <ProductCard srcProduct={bagProductImage}
        discount={'-25%'}
        discountPrice={'1450'}
        title={'Портативная Медици...'}
        price={'1645'}
        ratingStarNumber={'4.7'}
        countSold={123} />
      <ProductCard srcProduct={bagProductImage}
        discount={'-50%'}
        discountPrice={'1450'}
        title={'Портативная Медици...'}
        price={'1645'}
        ratingStarNumber={'4.7'}
        countSold={123} />
      <ProductCard srcProduct={bagProductImage}
        discount={'-10%'}
        discountPrice={'1450'}
        title={'Портативная Медици...'}
        price={'1645'}
        ratingStarNumber={'4.7'}
        countSold={123} />
      <ProductCard srcProduct={bagProductImage}
        discount={''}
        discountPrice={'1450'}
        title={'Портативная Медици...'}
        price={'1645'}
        ratingStarNumber={'4.7'}
        countSold={1} />
    </div>
  );
}

export { App };
