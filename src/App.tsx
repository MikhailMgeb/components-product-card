import React from 'react';

import { ProductCard } from './components/ProductCard/ProductCard';

import bagProductImage from './assets/image/bag-product.png';

import './App.css';


const App = () => {
  return (
    <div className="App">
      <ProductCard srcProduct={bagProductImage}
        discountPercent={'-25%'}
        discountPrice={1450}
        title={'Портативная Медици...'}
        price={1645}
        ratingStarNumber={4.7}
        countSold={12}
      />
      <ProductCard srcProduct={bagProductImage}
        discountPercent={'-10%'}
        discountPrice={1450}
        title={'Портативная Медици...'}
        price={1645}
        countSold={2}
        ratingStarNumber={4.7}
      />
    </div>
  );
}

export { App };
