import React from "react";
import Footer from "../functional_component/footer";
const PrivatePolicy = () => {
    return ( 
        <div>
        <div className="jumbotron">
        <h1 className="display-5">Privacy Notice</h1>
         <p className="lead">That’s the place where we explain what personal data (PD) 
         and non-personal data (NPD) we collect from you, how we collect it, how we protect it,
          how we may share it, how you can access and change it, and how you can limit our sharing of it.
          It also explains certain legal rights that you have with respect to your personal data.</p>
        <hr className="my-4"/>
        <p className="lead">Your Rights</p>
           <p>
          When using our website and submitting personal data to us, you may have certain rights under the General Data Protection Regulation (GDPR) and other laws. Depending on the legal basis for processing your personal data, 
           you may have some or all of the following rights:</p>
         <a className="btn btn-primary btn-lg" role="button">Learn more</a>
        </div>
        <div>
            <Footer />
        </div>
        </div>
     );
}
 
export default PrivatePolicy;