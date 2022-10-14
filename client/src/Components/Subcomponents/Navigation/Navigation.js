import React from "react";
import OnlineDevice from "../OnlineDevices/OnlineDevice";
import Style from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <div className={Style.Container}>
      <div>
        <div className={Style.Image}></div>
        <h1>WorkWare</h1>
      </div>
      <br></br>
      <h2 className={Style.Float}>Devices active</h2>
      <div className={Style.Devices}>
        <OnlineDevice DeviceName="Biggest Fan" />
      </div>

      <p>WorkWare 1.0</p>
    </div>
  );
};

export default Navigation;
