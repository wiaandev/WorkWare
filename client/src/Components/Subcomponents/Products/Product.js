import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Style from "./Products.module.scss";
import axios from "axios";

const Product = (props) => {
  const [Open, setOpen] = useState();

  const ledUser = "Wiaan Duvenhage";

  const payload = {
    state: true ,red: 255, green: 255, blue: 0
  }

  useEffect(() => {
    axios.get(`http://localhost:80/get-light/${ledUser}`)
    .then(res => {
      console.log(res);
    })
  })

  const changeLed = () => {
    
    axios.patch(`http://localhost:80/api/updateLed/${ledUser}`, payload)
    .then(res => {
      console.log("led changed!");
      console.log(res.data);
    })
    .catch(err => {
      console.log("there was an error" + err);
    })
  }

  return (
    <>
      <Modal data={props.data} setOpen={setOpen} open={Open} buttonName={"ToggleLed"} update={changeLed}/>
      <div className={Style.Container}>
        <div
          className={Style.Icon}
          style={{
            backgroundImage: `url(${props.icon})`,
          }}></div>
        <h2>{props.title}</h2>
        <h1>{props.data}</h1>
        <h4>{props.dataType}</h4>
        <Button onClick={() => setOpen(!Open)}>View more</Button>
      </div>
    </>
  );
};

export default Product;
