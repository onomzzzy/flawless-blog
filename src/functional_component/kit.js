import React from "react";
import "../css/kit.css";
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';
import Youtube from '@material-ui/icons/YouTube';
import { Link } from "react-router-dom";


const Kit = () => {
  return (
    <div className="kit">
      <div className="icon">
        <div className="container">
          <div className="row">
            <div className="col">
              <Facebook />
            </div>
            <div className="col">
              <Twitter/>
            </div>
            <div className="col">
              <Instagram/>
            </div>
            <div className="col">
              <Youtube />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const KitQ = (props) => {
   function setRedirect(href){
    //window.location.href = href;
    window.open( 
      href, "_blank"); 
  }

  return (
    <div className="kitq">
      <div className="icon">
        <div className="container">
          <div className="row">
            {props.facebook.length > 1 ?
            <div className="col">
              <Link onClick={()=> setRedirect(props.facebook)} >
              <Facebook/>
              </Link>
            </div>
            :
            <div className="col"/>
            }
            {props.youtube.length > 1 ?
            <div className="col">
              <Link onClick={()=> setRedirect(props.youtube)} >
              <Youtube/>
              </Link>
            </div>
            :
            <div className="col"/>
            }
            {props.twitter.length > 1 ?
            <div className="col">
              <Link onClick={()=> setRedirect(props.twitter)} >
              <Twitter/>
              </Link>
            </div>
            :
            <div className="col"/>
            }
            {props.instagram.length > 1 ?
            <div className="col">
              <Link onClick={()=> setRedirect(props.instagram)} >
              <Instagram />
              </Link>
            </div>
            :
            <div className="col"/>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kit;
