import React, { useState,useEffect, useContext } from "react";
import Feed from "./feed";
import "../css/home.css";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import {ProgressSpinner} from 'primereact/progressspinner';
import { Link } from "react-router-dom";
//import Slide from '@material-ui/core/Slide';
import {BlogContext} from "../App";
import EmptyBlogs from "./empty";
import RecentPost from "../functional_component/rpost";
import Footer from "../functional_component/footer";
import PopularPost from "./ppost";
import ColoredHeader from "./coloredHeader";



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  spinner:{
  textAlign:"center",
  }
}));



const Home = ({match}) => {
  const blogContext = useContext(BlogContext);
  const[isEmpty,setIsEmpty] = useState(false);
  const uriComment = `${blogContext.blogState.api}/comments`;
  const[comments,setComments] = useState([]);
  const[page,setPage] = useState('home');
   const[blogs,setBlogs] = useState([]);
   const classes = useStyles();

   async function getCommentfromServer() {
    await axios
   .get(uriComment)
   .then((res) => {
     let com =  res.data;
      setComments(com);
   })

   .catch((err) => {
     console.log(`error ocurr ${err}`);
   });

 }

   async function uriSelection(){
     switch(match.params.id){
     case undefined :
     case null :
      setPage('home'); 
      await axios
      .get(`${blogContext.blogState.api}/posts`)
      .then((res) => {
        let blogPosts = res.data;
        setIsEmpty(blogPosts.length > 0 ?false :true);
        setBlogs(blogPosts)
      })

      .catch((err) => {
        console.log(`error ocurr ${err}`);
      });
     break;
     case 'health':
     case 'selfimprovement':
     case 'karma':
     case 'religion':
     case 'relationship':
     case 'music':
     case 'marraige':
     case 'quote': 
     setPage('category');  
      await axios
      .get(`${blogContext.blogState.api}/posts/categories/${(match.params.id)==='selfimprovement'?'self improvement':match.params.id}`)
      .then((res) => {
        let blogPosts = res.data;
        setIsEmpty(blogPosts.length > 0 ?false :true);
        setBlogs(blogPosts)
      })

      .catch((err) => {
        console.log(`error ocurr ${err}`);
      });
      break;
      default:
        setPage('search'); 
        await axios
        .get(`${blogContext.blogState.api}/posts/search/${match.params.id}`)
        .then((res) => {
          let blogPosts = res.data;
          setIsEmpty(blogPosts.length > 0 ?false :true);
          setBlogs(blogPosts)
        })
  
        .catch((err) => {
          console.log(`error ocurr ${err}`);
        }); 
     }
   
  
  }

  function getCommentCount(id){
   let result = 0;
   for (let comment of comments) {
     if(comment.blogId === id){
       result +=1;
     }
  }
   return result;
  }

  

   useEffect(() => {
      async function getBlogfromServer() {
        // You can await here
        //const response 
        //select uri
        getCommentfromServer();
        uriSelection();
       
        // ...
      }
      getBlogfromServer();
    },[match.params.id]);

    const allBlogs = blogs.map((blog) =>
    <Link key={blog.id} to={`/articles/${blog.id}`}>
      <li >
     <div className="feeds">
     
      <Feed cover={blog.postCover} des={blog.des} category={blog.category} 
      title={blog.title} comment={getCommentCount(blog.id)} isVideo={blog.video}/> 
      
      </div> 
      </li>
      </Link>  

);
    return ( 
    <div className="home">
      {blogs.length === 0 && !isEmpty ?
     <div className={classes.spinner}>
     <ProgressSpinner style={{width: '60px', height: '60px'}} 
     strokeWidth="6" fill="#EEEEEE" animationDuration=".5s"/>
      </div>
        :
        <div>
         {isEmpty?
         <EmptyBlogs page={page} value={match.params.id}/>
         :
          <div>
            <div>
            {blogContext.blogState.screen > 1030 ?
            <div/>
            :
            <div>
            <div>
              <ColoredHeader title="POPULAR POSTS" />
            </div>
           <PopularPost />
           <div>
           <ColoredHeader title="RECENT POSTS" />
            </div>
           <RecentPost page={true}/>
           </div>

           }
            </div>

           <ColoredHeader title="GREAT ARTICLES" />
           {allBlogs} 
          
         </div>
        }

        <div>
        <Footer />

        </div>

           </div>
           
     }
        </div>
     );
}
 
export default Home;