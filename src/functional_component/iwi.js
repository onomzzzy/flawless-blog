import React from "react";
import "../css/iwi.css";

const ImageWithIcon = (props) => {
  return (
    <div className="iwi">
      <img src={props.picture} />
      <div className="icon-container">
        <div className="icon">
          <i className="pi pi-circle-on"></i>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageWithIcon;