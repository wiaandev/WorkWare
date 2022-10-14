import React, { useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Style from "./Products.module.scss";

const Product = (props) => {
  const [Open, setOpen] = useState();

  return (
    <>
      <Modal data={props.data} setOpen={setOpen} open={Open} />
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
        <Button onClick={() => setOpen(!Open)}>View more</Button>
      </div>
    </>
  );
};

export default Product;
