import React from "react";
import "../css/about.css";
import Logo from "@material-ui/icons/Polymer";
import Michael from "../icons/mic1.jpg";
const About = () => {
    return ( 
        <div className="about-me">
        <div className="icon">
          {/*<img src={Michael} />*/}
          {/*<Logo style={{ fontSize: 50,color:'#FFF'}} />*/}
          <h4>FLAWLESS HEART</h4>
        </div>
        <div>
          <h5><i>Let the spirit inspire you</i></h5>
        
          <div className="card">
          <h6>
            Hey! I'am so happy to have you here. Thanks you for taking time out to browse through my site,
            These should help you find what you're looking for.
          </h6>
          </div>
         
        </div>
      </div>
     );
}
 
export default About;