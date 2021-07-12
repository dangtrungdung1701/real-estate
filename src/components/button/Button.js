import React from "react";
import "./button.css";

function Button(props) {
  return (
    <div className="btn">
      <button
        style={{ backgroundColor: `var(${props.bgColor})` }}
        onMouseOver={(e) =>
          (e.target.style.backgroundColor = `var(${props.bgHoverColor})`)
        }
        onMouseOut={(e) =>
          (e.target.style.backgroundColor = `var(${props.bgColor})`)
        }
      >
        {props.content}
      </button>
    </div>
  );
}

export default Button;
