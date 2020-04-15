import React from 'react'
import './ProductsContainer.scss'



function ProductsContainer() {

    const products = [
        { catalog_number: 1, name: "Product1", image: "/images/product.jpg", category: "category1", price: 9.99, unit: "AUD" },
        { catalog_number: 2, name: "Product2", image: "/images/product.jpg", category: "category2", price: 19.99, unit: "AUD" },
        { catalog_number: 3, name: "Product3", image: "/images/product.jpg", category: "category3", price: 29.99, unit: "AUD" },
        { catalog_number: 4, name: "Product4", image: "/images/product.jpg", category: "category1", price: 39.99, unit: "AUD" },
        { catalog_number: 5, name: "Product5-1", image: "/images/product.jpg", category: "category2", price: 49.99, unit: "AUD" },
        { catalog_number: 6, name: "Product5-2", image: "/images/product.jpg", category: "category3", price: 59.99, unit: "AUD" }
    ]

    return (
        <div className="products-container">
            {products.map((item) => {
                return (
                    <div key={item.catalog_number} className="product-card">
                        <img src={item.image} alt="product iamge" />
                        <div className="product-title">{item.name}</div>
                        <div className="product-category">{item.category}</div>
                        <div className="product-price">{item.price}<span className="product-unit">{item.unit}</span></div>
                        <div className="buy-button">Buy Now</div>
                    </div>
                )
            })}

        </div>
    )
}

export default ProductsContainer
