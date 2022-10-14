import React from "react";
import Style from "./Button.module.scss";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${Style.Btn} ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
