import React, { useEffect, useState } from "react";
import Product from "../../Components/product.jsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getProducts } from "../../FetchApi/api.js";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data.products || []);
    });
  }, []);

  return (
    <div style={{ marginTop: "1rem" }}>
      {products && products !== "Server side error" ? (
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          infinite={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {products &&
            products.map((item) => <Product key={item._id} item={item} />)}
        </Carousel>
      ) : (
        <div>
          <h1>Server Side Error</h1>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
