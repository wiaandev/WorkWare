import React from "react";
import Style from "./OnlineDevice.module.scss";

const OnlineDevice = (props) => {
  return (
    <div className={Style.Container}>
      <h2>{props.DeviceName}</h2>
      <div className={Style.StatusIcon}></div>
    </div>
  );
};

export default OnlineDevice;
