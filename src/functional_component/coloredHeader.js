import React from "react";
import "../css/colored.css";
const ColoredHeader = (props) => {
    return ( 
        <div className="colored-head">
            <div className="rec">
            <div id="rectangle">
                <h5>{props.title}</h5>
            </div>
            </div>
            <div className="tri">
            <div id="triangle-down"/>
            </div>
           
        </div>
     );
}
 
export default ColoredHeader;