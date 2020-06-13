import React,{useState,useEffect, useContext} from "react";
import "../css/rpost.css";
import axios from "axios";
import { JustDate } from "./author";
import {BlogContext} from "../App";

const RecentPost = (props) => {
  const blogContext = useContext(BlogContext)
  const[size,setSize] = useState(0);
  const[resI,setResI] = useState({cover:'',title:'',isVideo:false,date:[]});
  const[resII,setResII] = useState({cover:'',title:'',isVideo:false,date:[]});

  useEffect(() => {
    async function getBlogfromServer() {
      // You can await here
      //const response =
       await axios
      .get(`${blogContext.blogState.api}/posts`)
      .then((res) => {
        let blogPosts = res.data;
        setSize(blogPosts.length);
        if(blogPosts.length > 0){
          setResI({...resI,cover:blogPosts[0].postCover,title:blogPosts[0].title,isVideo:blogPosts[0].video,date:dateArray(blogPosts[0].date)});
        }
        if(blogPosts.length > 1){
        setResII({...resII,cover:blogPosts[1].postCover,title:blogPosts[1].title,isVideo:blogPosts[1].video,date:dateArray(blogPosts[1].date)});
        }
        
      })
  
      .catch((err) => {
        console.log(`error ocurr ${err}`);
      });
     
      // ...
    }
    getBlogfromServer();
  },[]);

  function shortTitle(title){
   let result = title + '';
   if(result.length > 13){
   result = result.substring(0,12) + "..."
  }
  return result;
  }

  function shortTitleII(title){
    let result = title + '';
    if(result.length > 30){
    result = result.substring(0,30) + "..."
   }
   return result;
   }

  function dateArray(date){
    let x = date + '';
    let result = x.split(" ");
    return result;
  }

  return (
    <div>
      {props.page ?

<div className="rpost-page">
<div className="container">

  <div className="row">
    <div className="col-12">
      {size > 0 ?
      <div className="row">
        <div className="col-7">
          <img src={resI.cover} />
        </div>
        <div className="col-5">
          <div className="title">
          <h6>{resI.title}</h6>
          </div>
          <div className="date">
            <JustDate month={`${resI.date[1]} ${resI.date[2]}`} year={resI.date[3]} />
          </div>
        </div>
        <div className="col-12">
          <hr></hr>
        </div>

      </div>
      :
      <div/>
      }

    </div>

    <div className="col-12">
     {size > 1 ?
      <div className="row">
        <div className="col-7">
          <img src={resII.cover} />
        </div>
        <div className="col-5">
          <div className="title">
          <h6>{resII.title}</h6>
          </div>
          <div className="date">
          <JustDate month={`${resII.date[1]} ${resII.date[2]}`} year={resII.date[3]} />
          </div>
        </div>
        <div className="col-12">
          <hr></hr>
        </div>
      </div>
      :
      <div/>
      }
    </div>

  </div>
</div>
</div>

     :
    <div className="rpost">
      <div className="container">

        <div className="row">
          <div className="col-12">
            {size > 0 ?
            <div className="row">
              <div className="col-7">
                <img src={resI.cover} />
              </div>
              <div className="col-5">
                <div className="title">
                <h6>{resI.title}</h6>
                </div>
                <div className="date">
                  <JustDate month={`${resI.date[1]} ${resI.date[2]}`} year={resI.date[3]} />
                </div>
              </div>
              <div className="col-12">
                <hr></hr>
              </div>

            </div>
            :
            <div/>
            }

          </div>

          <div className="col-12">
           {size > 1 ?
            <div className="row">
              <div className="col-7">
                <img src={resII.cover} />
              </div>
              <div className="col-5">
                <div className="title">
                <h6>{resII.title}</h6>
                </div>
                <div className="date">
                <JustDate month={`${resII.date[1]} ${resII.date[2]}`} year={resII.date[3]} />
                </div>
              </div>
              <div className="col-12">
                <hr></hr>
              </div>
            </div>
            :
            <div/>
            }
          </div>

        </div>
      </div>
    </div>
  }
    </div>
  );
};

export default RecentPost;
