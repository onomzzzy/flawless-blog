import React,{useEffect,useState, useContext} from "react";
import "../css/nav.css";
import { BlogContext } from "../App";
const NLink = (props) => {
const blogContext = useContext(BlogContext);
const [current,setCurrent] = useState(props.category === 'SELF IMPROVEMENT'?'selfimprovement':`${props.category}`.toLocaleLowerCase());

    return ( 
        <div className="nav">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10">
                        {blogContext.blogState[current]?
                <div className="colored">
                  <h5>{props.category}</h5>
                </div>
                :
                <div className="non-colored">
                  <h5>{props.category}</h5>
                </div>
                    }
                     
                    </div>
                    <div className="col-2">
                    {blogContext.blogState[current] ?
                     <div className="color-bar"/>
                     :
                     <div className="bar"/>
                     }
                    </div>

                </div>

            </div>
        </div>
     );
}
 
export default NLink;