import React, { useState, useContext } from "react";
import NLink from "./nav";
import Divider from '@material-ui/core/Divider';
import "../css/sidenav.css";
import About from "./about";
import { Link } from "react-router-dom";
import {BlogContext} from "../App";

const SideNavDesktop = (props) => {
    const blogContext = useContext(BlogContext);

    function handleCategory(category){
        blogContext.blogDispatch({type:'SELECT_CATEGORY',category:category})
        if(props.mobile){
         blogContext.blogDispatch({type:'TOGGLE_SIDE_BAR'})  
        }
    }

    return ( 
        <div className="side">
            <div className="about">
                <About />
            </div>
            <Divider />
            <div className="box" onClick={(e) =>handleCategory('home')}>
            <Link to={`/`}>
           <NLink category="HOME"/>
           </Link>
           </div>
            <Divider />
            {blogContext.blogState.screen <= 640 ?
            <div>
            <div className="box" onClick={(e) =>handleCategory('policy')}>
            <Link to={`/policy`}>
           <NLink category="POLICY"/>
           </Link>
           </div>
            <Divider />
            </div>
            :
            <div />
            }
            
            {blogContext.blogState.screen <= 526 ?
            <div>
            <div className="box" onClick={(e) =>handleCategory('contact')}>
            <Link to={`/contact`}>
           <NLink category="CONTACT"/>
           </Link>
           </div>
         
            <Divider />
            </div>
            :
            <div />
            }
            
            {blogContext.blogState.screen <= 993 ?
            <div>
            <div className="box" onClick={(e) =>handleCategory('subscribe')}>
            <Link to={`/subscribe`}>
           <NLink category="SUBSCRIBE"/>
           </Link>
           </div>
            <Divider />
            </div>
            :
            <div/>
              }
            <div className="box" onClick={(e) =>handleCategory('selfimprovement')}>
            <Link  to={`/home/selfimprovement`}>
           <NLink category="SELF IMPROVEMENT"/>
           </Link>
           </div>
           <Divider />
           <div className="box" onClick={(e) =>handleCategory('health')}>
           <Link  to={`/home/health`}>
           <NLink category="HEALTH"/>
           </Link>
           </div>
           <Divider />
           <div className="box" onClick={(e) =>handleCategory('religion')}>
           <Link  to={`/home/religion`}>
           <NLink category="RELIGION"/>
           </Link>
           </div>
           <Divider />
           <div className="box" onClick={(e) =>handleCategory('karma')}>
           <Link  to={`/home/karma`}>  
           <NLink category="KARMA"/>
           </Link>
           </div>
           <Divider />
           <div className="box" onClick={(e) =>handleCategory('quote')}>
           <Link  to={`/home/quote`}>
           <NLink category="QUOTE"/>
           </Link>
           </div>
           <Divider />
           <div className="box" onClick={(e) =>handleCategory('marriage')}>
           <Link  to={`/home/marraige`}>
           <NLink category="MARRIAGE"/>
           </Link>
           </div>
           <Divider />
           <div className="box" onClick={(e) =>handleCategory('relationship')}>
           <Link  to={`/home/relationship`}>
           <NLink category="RELATIONSHIP"/>
           </Link>
           </div>
           <Divider />
           <div className="box" onClick={(e) =>handleCategory('music')}>
           <Link  to={`/home/music`} >
           <NLink category="MUSIC"/>
           </Link>
           </div>
           <Divider />
        </div>
     );
}
 
export default SideNavDesktop;