import React from "react";
import {NewsLetterM} from "../functional_component/subscribers";
import Footer from "./footer";
const Subscribe = () => {
    return ( 
        <div>
            <div>
            <NewsLetterM/>
            </div>
           
            <div>
                <Footer/>
            </div>
        </div>
     );
}
 
export default Subscribe;