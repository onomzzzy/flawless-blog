import React from "react";
import "../css/iwi.css";
import Video from "./video";

const ImageWithIcon = (props) => {
  return (
    <div className="iwi">
      {props.isVideo ?
      <Video video={props.picture} />
      :
      <img src={props.picture} />
      }
      <div className="icon-container">
        <div className="icon">
          <i className="pi pi-circle-on" style={{color:'#605196'}}></i>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageWithIcon;