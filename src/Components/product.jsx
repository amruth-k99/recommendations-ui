import React from "react";

const Product = ({
  item: { _id, imageURLs, title, rating, basePrice, discountPercentage },
}) => {
  return (
    <div
      key={_id}
      style={{
        width: "12rem",
        padding: "0.5rem",
      }}
    >
      <img style={{ width: "100%"}} src={imageURLs} />
      <p style={{ fontSize: "16px", margin: "4px 0", fontWeight: "bold" }}>
        {title}
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ color: "#878787", fontWeight: 500 }}>
          {rating} Rating
        </span>{" "}
        <img
          style={{ width: "70px" }}
          src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          alt=""
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80%",
        }}
      >
        <p style={{ fontSize: "18px", fontWeight: "500", display: "inline" }}>
          ${basePrice}
        </p>
        <p
          style={{
            display: "inline",
            fontSize: "14px",
            fontWeight: "500",
            color: "#878787",
          }}
        >
          <strike>${basePrice}</strike>
        </p>
        <p
          style={{
            fontSize: "14px",
            fontWeight: "500",
            display: "inline",
            color: "#388E3C",
          }}
        >
          {discountPercentage}% off
        </p>
      </div>
    </div>
  );
};

export default Product;
