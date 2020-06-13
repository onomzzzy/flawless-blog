import React from "react";
import "../css/about.css";
import logo from "../icons/fulllogo.png";
import Footer from "../functional_component/footer";
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import Mail from '@material-ui/icons/MailOutline';
import Youtube from '@material-ui/icons/YouTube';
const About = () => {
    return ( 
        <div className="about-me">
        <div className="icon">
          <img src={logo} />
        </div>
        <div className="motto">
        <h6>LET THE SPIRIT INSPIRE YOU</h6>
        </div>
        <div>
          <div className="container">
            <div className="row" style={{marginBottom:'5px'}}>
              <div className="col">
              <Facebook style={{color:'#fff',fontSize:'15px'}}/>
              </div>
              <div className="col">
              <Twitter style={{color:'#fff',fontSize:'15px'}}/>
              </div>
              <div className="col">
              <Instagram style={{color:'#fff',fontSize:'15px'}}/>
              </div>
              <div className="col">
              <Youtube style={{color:'#fff',fontSize:'15px'}}/>
              </div>
              <div className="col">
              <Mail style={{color:'#fff',fontSize:'15px'}}/>
              </div>

            </div>

          </div>
        </div>
        
          <div className="card">
          <p>
            Hey! I'am so happy to have you here. Thank you for taking time out to browse through my site,
            These should help you find what you're looking for.
          </p>
          </div>
      </div>
     );
}

export const AboutUs = () => {
  return ( 
    <div>
     <div className="jumbotron">
        <h1 className="display-5">Mission</h1>
         <p className="lead">All successful person have a goal.
          No one can get anywhere unless he knows where he wants
           to go and what he wants to be or do.- Les brown
       Our mission is to realize your goal in every aspect of life,
      to enable the young, youths and old focus on bringing
       that great potential and talents lying inside you.</p>
        <hr className="my-4"/>
        <p className="lead">Companies</p>
           <p>Do you have a major conference, event or summit planned?
         Are you’re looking for keynote speaker?
        Check out videos, testimonials and examples of my previous work,
       Flawless Heart is what you are searching for.</p>
       <hr className="my-4"/>
       <p className="lead">Coaching</p>
           <p>Transform your lives with Flawless heart.</p>
           <p>Flawless heart offers you meditation about health,
              relationships and your personal life</p>
         
        </div>
        <div>
            <Footer />
        </div>
    </div>
   );
}
 
export default About;