import React from "react";
import Product from "../Subcomponents/Products/Product";
import Style from "./RightSection.module.scss";

const RightSection = () => {
  return (
    <div className={Style.Section}>
      <br></br>
      <br></br>
      <h1 className={Style.Heading}>Your Devices</h1>
      <br></br>
      <br></br>
      <div className={Style.break}>
        <Product
          icon={"http://www.mypicx.com/uploadimg/1312875436_05012011_2.png"}
          title={"Biggest Fan"}
          data={"20"}
          dataType={"Degrees Celsius"}
          variable={""}
        />
      </div>
      <br></br>
      <h1 className={Style.Heading}>Graph</h1>
      <br></br>
      <div className={Style.break}>
        <Product
          icon={"http://www.mypicx.com/uploadimg/1312875436_05012011_2.png"}
          title={"Biggest Fan"}
          data={"20"}
          dataType={"Degrees Celsius"}
          variable={""}
        />
      </div>
    </div>
  );
};

export default RightSection;
