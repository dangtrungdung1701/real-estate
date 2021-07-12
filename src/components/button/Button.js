import React from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import "./button.css";

function Button(props) {
  return (
    <div className="btn">
      <button
        style={{
          backgroundColor: `var(${props.bgColor})`,
        }}
      >
        <span>{props.content}</span>
        <ArrowRightAltIcon className="btn-icon" color="secondary" />
      </button>
    </div>
  );
}

export default Button;
