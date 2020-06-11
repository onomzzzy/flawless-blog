import React from "react";
import "../css/footer.css"
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import Youtube from '@material-ui/icons/YouTube';
const Footer = () => {
    return ( 
        <div className="com-footer">
         <div className="container">
        
        <div className="row">
          <div className="col">
            <hr></hr>
          </div>
          <div className="col-auto">
            <h3>Flawless Heart</h3>
          </div>
          <div className="col">
            <hr></hr>
          </div>
        </div>

        <div className="row">
         <div className="col">

             <div>
                 <h6>ABOUT US</h6>
             </div>
             <div>
                 <hr/>
             </div>
             <div>
                 <p>Feedback</p>
                 <p>Adversite with us</p>
                 <p>Categories</p>
                 <p>Contact us</p>
             </div>

         </div>

          <div className="col">

             <div>
                 <h6>SOCIAL MEDIA</h6>
             </div>
             <div>
                 <hr/>
             </div>
             <div>
                 <div className="row">
                     <div className="col-12">
                         <div className="row">
                             <div className="col-1">
                              <Facebook />
                             </div>

                             <div className="col-3">
                              <div className="push-p">
                              <p>Facebook</p>
                            </div>   
                             
                             </div>

                         </div>
                     </div>

                     <div className="col-12">
                         <div className="row">
                             <div className="col-1">
                              <Twitter />
                             </div>

                             <div className="col-3">
                              <div className="push-p">
                              <p>Twitter</p>
                            </div>   
                             
                             </div>

                         </div>
                     </div>

                     <div className="col-12">
                         <div className="row">
                             <div className="col-1">
                              <Instagram />
                             </div>

                             <div className="col-3">
                              <div className="push-p">
                              <p>Instagram</p>
                            </div>   
                             
                             </div>

                         </div>
                     </div>

                     <div className="col-12">
                         <div className="row">
                             <div className="col-1">
                              <Youtube />
                             </div>

                             <div className="col-3">
                              <div className="push-p">
                              <p>Youtube</p>
                            </div>   
                             
                             </div>

                         </div>
                     </div>

                 </div>
                 
                 
             </div>

         </div>


        </div>

        <div className="row">

            <div className="col-12">
             <div>
                 <hr/>
             </div>
             <div>
                 <p>Privacy | Site Terms | © 2020, Flawless Heart, Inc. or its affiliates. All
          rights reserved.</p>
             </div>
            </div>

        </div>

        </div>
        </div>
     );
}
 
export default Footer;