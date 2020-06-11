import React,{useState,useEffect,useContext} from "react";
import "../css/article.css";
import BlogComment, { BlogReply, CommentBox } from "./comment";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Avatar from '@material-ui/core/Avatar';
import Author from "../functional_component/author";
import Video from "./video";
import { KitQ } from "../functional_component/kit";
import { BlogContext } from "../App";


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    spinner:{
    textAlign:"center",
    },
    purple: {
        color: '#fff',
        backgroundColor: '#605196',
        width: theme.spacing(6),
      height: theme.spacing(6),
      }
  }));

const Article = ({match}) => {
    const classes = useStyles();
    const blogContext = useContext(BlogContext);
 
    const[blog,setBlog] = useState({
      id:null,
     title:'',
     date: '',
     postCover: '',
     isVideo: false,
     des:'',
     category: '',
     article:'',
     author: '',
 });

 const[comments,setComments] = useState([]);
 

 const[author,setAuthor] = useState({
    firstname:'',
    lastname:'',
    avatar:'',
    phonenumber:'',
    whatsapp:'',
    facebook: '',
    twitter: '',
    instagram:'',
    youtube:'',
    about:''
});

useEffect(() => {
task();
},[blogContext.blogState.task]);

const task = () => {
  switch(blogContext.blogState.task){
  case 0 :
    blogContext.blogDispatch({type:'TASK_CLEAR'});
  break;
  case 1 :
    getCommentfromServer(match.params.id);
    blogContext.blogDispatch({type:'TASK_CLEAR'});
  break;
    default :
    blogContext.blogDispatch({type:'TASK_CLEAR'});
  }
 
}
  
    const[date,setDate] = useState([]);

    useEffect(() => {
       async function getBlogfromServer() {
         // You can await here
         //const response =
          await axios
         .get(`${blogContext.blogState.api}/posts/${match.params.id}`)
         .then((res) => {
           let blogPost = res.data;
           setDate((`${blogPost.date}`).split(" "));
           setBlog({...blog,
            id:blogPost.id,
            title:blogPost.title,
            postCover: blogPost.postCover,
            isVideo:blogPost.video,
            des:blogPost.des,
            category:blogPost.category,
            article:blogPost.article,
            author: blogPost.author,

        });
        getAuthorfromServer(blogPost.author);
        getCommentfromServer(match.params.id);
         })
   
         .catch((err) => {
           console.log(`error ocurr ${err}`);
         });
         // ...
       }

      
       getBlogfromServer();
       
     },[]);


     async function getAuthorfromServer(author) {
       await axios
      .get(`${blogContext.blogState.api}/users/${author}`)
      .then((res) => {
        let log =  res.data;
        setAuthor({...author,
          firstname:log.log.firstname,
          lastname:log.log.lastname,
          avatar:log.log.avatar,
          phonenumber:log.log.phonenumber,
          whatsapp:log.log.whatsapp,
          facebook: log.log.facebook,
          twitter: log.log.twitter,
          instagram:log.log.instagram,
          youtube:log.log.youtube,
          about:log.log.about

     });
     
      })

      .catch((err) => {
        console.log(`error ocurr ${err}`);
      });

    }

    async function getCommentfromServer(blogId) {
      await axios
     .get(`${blogContext.blogState.api}/comments/articles/${blogId}`)
     .then((res) => {
       let com =  res.data;
        setComments(com);
     })

     .catch((err) => {
       console.log(`error ocurr ${err}`);
     });

   }




    return ( 
        <div className="blogPost">
          {((blog === undefined)||(blog.id === null)) ?
          <div className={classes.spinner}>
          <CircularProgress />
           </div>
          :
          <div>
      <div className="header-blog">
        <div className="title">
        <h3>{blog.title}</h3>
        </div>
        <div className="author">
          {((author === undefined)||(author === null)) 
          && ((blog === undefined)||(blog.id === null)) ?
          <div/>
          :
          <div>
          {date.length > 1 ?
          <Author name={`${author.firstname} ${author.lastname}`} 
          date={`${date[1]} ${date[2]}, ${date[3]}`} />
          :
          <div/>
         }
         </div>
          }
        </div>
      </div>

      <div className="display">
          {blog.isVideo ?
          <Video video={blog.postCover}/>
          :
         <img src={blog.postCover} />
        }
      </div> 

      <div className="content" 
      dangerouslySetInnerHTML={ {__html: blog.article} }/>

      <div className="about">
        <div className="container">
          {blog.id === null ?
          <div/>
          :
          <div className="row">
            <div className="col-12">
              <hr></hr>
            </div>
            <div className="col-2">
            <Avatar className={classes.purple}>
              {author.firstname.substring(0,1)}
              </Avatar>
            </div>
            <div className="col-10">
              <div>
      <h5>{author.firstname} {author.lastname}</h5>
                <i><h6>Author</h6></i>
              </div>
              <div>
                <h6>
                  {author.about}
                </h6>
              </div>
              <div>
                <KitQ facebook={author.facebook} 
                twitter={author.twitter} 
                instagram={author.instagram}
                 youtube={author.youtube}/>
              </div>
            </div>
            <div className="col-12">
              <div className="cocon">
                {comments.length > 0?
              <h4>Comments</h4>
              :
              <div/>
              }
              </div>
              <hr></hr>
            </div>
            </div>
           
            }

            </div>
            </div>

      <div className="commentandreply">
      {
        comments.map((comment =>
        <ul key={comment.id}>
               <BlogComment name={comment.fullName} date={comment.date} comment={comment.comment} />
               <li>
               <BlogReply name={`${author.firstname} ${author.lastname}`}
                reply={comment.reply.reply}  date={comment.reply.date}/>
                </li>
             </ul>
        ))
      }
      </div>

      <div className="addcomment">
        <CommentBox blogId={match.params.id} />
      </div>
      </div>

          }
 
        </div>
     );
}
 
export default Article;