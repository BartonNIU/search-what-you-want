import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import './App.scss';
import { ProductContext } from './components/ProductContext.js'
import SearchBar from './components/SearchBar/SearchBar';
import Footer from './components/Footer/Footer';
import MainRouter from './MainRouter';
import Header from './components/Header/Header';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import ProductDetail from './components/ProductsContainer/ProductDetail/ProductDetail';
import Result from './pages/Result/Result';
import Home from './pages/Home/Home';
import { pathName } from './utilities/RoutePathName';
import NotFoundPage from './components/NotFound Page/NotFoundPage';

function App() {

  const data = [
    { id: 1, title: "Product1", image: "/images/product.jpg", category: "category1", description: "Product details page", price: 9.99, unit: "AUD" },
    { id: 2, title: "Product2", image: "/images/product.jpg", category: "category2", description: "Product details page", price: 19.99, unit: "AUD" },
    { id: 3, title: "Product3", image: "/images/product.jpg", category: "category3", description: "Product details page", price: 29.99, unit: "AUD" },
    { id: 4, title: "Product4", image: "/images/product.jpg", category: "category1", description: "Product details page", price: 39.99, unit: "AUD" },
    { id: 5, title: "Product5-1", image: "/images/product.jpg", category: "category2", description: "Product details page", price: 49.99, unit: "AUD" },
    { id: 6, title: "Product5-2", image: "/images/product.jpg", category: "category3", description: "Product details page", price: 59.99, unit: "AUD" },
    { id: 7, title: "Product5-3", image: "/images/product.jpg", category: "category1", description: "Product details page", price: 9.99, unit: "AUD" },
    { id: 8, title: "Product5-4", image: "/images/product.jpg", category: "category2", description: "Product details page", price: 19.99, unit: "AUD" },
    { id: 9, title: "Product6-1", image: "/images/product.jpg", category: "category3", description: "Product details page", price: 29.99, unit: "AUD" },
    { id: 10, title: "Product6-2", image: "/images/product.jpg", category: "category1", description: "Product details page", price: 39.99, unit: "AUD" }
  ]

  const [products, setProducts] = useState(data)
  const [category, setCategory] = useState("product")



  return (
    <Router>
      <div className="app-container">
        <Header />

        {/* <ProductsContainer /> */}
        <ProductContext.Provider value={{ products, setProducts, category, setCategory, data }} >
          <SearchBar />
          <Switch>
            <Route path={pathName.home} exact component={Home} />
            <Route path={pathName.result} exact component={Result} />
            <Route path={pathName.detail} component={ProductDetail} />>
            <Route component={NotFoundPage} />>
          </Switch>

          {/* <MainRouter /> */}
          <Footer />
        </ProductContext.Provider>

      </div>

    </Router>


  );
}

export default App;
