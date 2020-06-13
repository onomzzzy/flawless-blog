import React, { useContext,useEffect,useState } from "react";
import "../css/ppost.css";
import axios from "axios";
import ImageWithIcon from "./iwi";
import { BlogContext } from "../App";
import { Link } from "react-router-dom";
import Video from "./video";


const PopularPost = () => {
const blogContext = useContext(BlogContext);
const[size,setSize] = useState(0);
const[popI,setPopI] = useState({cover:'',title:'',isVideo:false,id:''});
const[popII,setPopII] = useState({cover:'',title:'',isVideo:false,id:''});
const[popIII,setPopIII] = useState({cover:'',title:'',isVideo:false,id:''});
const[popIV,setPopIV] = useState({cover:'',title:'',isVideo:false,id:''});
const[popV,setPopV] = useState({cover:'',title:'',isVideo:false,id:''});

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
        setPopI({...popI,cover:blogPosts[0].postCover,title:blogPosts[0].title,isVideo:blogPosts[0].video,id:blogPosts[0].id});
      }
      if(blogPosts.length > 1){
      setPopII({...popII,cover:blogPosts[1].postCover,title:blogPosts[1].title,isVideo:blogPosts[1].video,id:blogPosts[1].id});
      }
      if(blogPosts.length > 2){
      setPopIII({...popIII,cover:blogPosts[2].postCover,title:blogPosts[2].title,isVideo:blogPosts[2].video,id:blogPosts[2].id});
      }
      if(blogPosts.length > 3){
      setPopIV({...popIV,cover:blogPosts[3].postCover,title:blogPosts[3].title,isVideo:blogPosts[3].video,id:blogPosts[3].id});
      }
      if(blogPosts.length > 4){
      setPopV({...popV,cover:blogPosts[4].postCover,title:blogPosts[4].title,isVideo:blogPosts[4].video,id:blogPosts[4].id});
      }
    })

    .catch((err) => {
      console.log(`error ocurr ${err}`);
    });
   
    // ...
  }
  getBlogfromServer();
},[]);

  return (
    <div className="ppost">
      <div className="container">
       
        <div className="row">
          <div className="col-12">
            {size > 0 ?
            <div>
               <Link to={`/articles/${popI.id}`}>
            
            <ImageWithIcon isVideo={popI.isVideo} picture={popI.cover} text="1" />
            
            </Link>
            <div className="title">
            <h6>{popI.title}</h6>
            </div>
            </div>
            :
            <div/>
         }

          </div>

          <div className="col-6">
            {size > 1 ?
            <div>
            <Link to={`/articles/${popII.id}`}>
           
            <ImageWithIcon isVideo={popII.isVideo} picture={popII.cover} text="2" />
            
            </Link>
            <div className="title">
              <h6>{popII.title}</h6>
            </div>
            </div>
            :<div />
            }
          </div>

          <div className="col-6">
            {size > 2 ?
           <div>
              <Link to={`/articles/${popIII.id}`}>
          
            <ImageWithIcon isVideo={popIII.isVideo} picture={popIII.cover} text="3" />
            
            </Link>
            <div className="title">
              <h6>{popIII.title}</h6>
            </div>
            </div> 
            :
            <div/>
            }
          </div>

          <div className="col-6">
            {size >3 ?
            <div>
            <Link to={`/articles/${popIV.id}`}>
            <ImageWithIcon isVideo={popIV.isVideo} picture={popIV.cover} text="4" />
          </Link>
            <div className="title">
              <h6>{popIV.title}</h6>
            </div>
            </div>
            :
            <div/>
            }
          </div>
          
          <div className="col-6">
            {size > 4 ?
            <div>
              <Link to={`/articles/${popV.id}`}>
           
            <ImageWithIcon isVideo={popV.isVideo} picture={popV.cover} text="5" />
          
          </Link>
            <div className="title">
              <h6>{popV.title}</h6>
            </div>
            </div>
            :
            <div/>
            }
          </div>
    
        </div>
      </div>
    </div>
  );
};

export default PopularPost;
