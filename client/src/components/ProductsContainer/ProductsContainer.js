/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import './ProductsContainer.scss';
import SearchBar from '../SearchBar/SearchBar';
import ProductDetail from './ProductDetail/ProductDetail';
import { ProductContext } from '../ProductContext';
import { pathName } from '../../utils/RoutePathName';


function ProductsContainer() {
  const { products, setProducts, data } = useContext(ProductContext);
  // console.log("products on container is:", products);
  // TODO: 
  // FIXME: 

  return (

    <div className="main-container">
      {/* <SearchBar /> */}

      <div className="products-container">

        {products.map((item) => (
          // <LazyLoad key={item.id} height={200} offset={[-100, 50]}>
          <div key={item.id}>
            <Link to={{ pathname: `${pathName.result}/${item.title.toLowerCase().split(' ').join('-')}`, item }}>
              <div className="product-card">
                <img src={item.image} alt="product" />
                <div className="product-title">{item.title}</div>
                <div className="product-category">{item.category}</div>
                <div className="product-price">
                  {item.price}
                  <span className="product-unit">{item.unit}</span>
                </div>
                <div className="buy-button">View Details</div>
              </div>
            </Link>
          </div>

          // </LazyLoad>
        ))}

      </div>

    </div>


  );
}

export default ProductsContainer;
