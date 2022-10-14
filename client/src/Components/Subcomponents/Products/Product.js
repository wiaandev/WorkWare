import React from "react";
import Button from "../Button/Button";
import Style from "./Products.module.scss";

const Product = (props) => {
  return (
    <div className={Style.Container}>
      <div
        className={Style.Icon}
        style={{
          backgroundImage: `url(${props.icon})`,
        }}
      ></div>
      <h2>{props.title}</h2>
      <h1>{props.data}</h1>
      <h4>{props.dataType}</h4>
      <Button>View more</Button>
    </div>
  );
};

export default Product;
