import React from "react";
import "../css/contact.css";
import PhoneIcon from '@material-ui/icons/PhoneOutlined';
import SendIcon from '@material-ui/icons/SendOutlined';
import Footer from "./footer";
const Contact = () => {
    return ( 
        <div className="contact-us">
          <div className="bg">
              
          </div>
          <div className="contact-label">
              <div className="container">
                  <div className="row">
                      <div className="col col-md-6">
                        <div className="card">
                         <div>
                          <PhoneIcon style={{ fontSize: 60 }}/>
                          <h5>Talk to Us</h5>
                          <p>Do you need help or questions about your 
                        life from friends or flawless heart support 
                        Representatives ? Don't worry we've got you
                        ,give us a call now</p>
                        <h4>07038838037</h4>
                         </div>
                        </div>
                      </div>

                      <div className="col col-md-6">
                        <div className="card">
                         <div>
                          <SendIcon style={{ fontSize: 60 }}/>
                          <h5>Customer Support</h5>
                          <p>Sometimes you need a little help from your friends.
                        Or a flawless heart support rep...</p>
                        <h4>flawlessheart2020@gmail.com</h4>
                         </div>
                        </div>
                      </div>

                  </div>

              </div>


          </div>

          <div>
              <Footer />
          </div>
        </div>
     );
}
 
export default Contact;