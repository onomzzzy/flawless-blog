import React, { useState, useContext,useRef } from "react";
import "../css/comment.css";
import axios from "axios";
import { JustDate } from "./author";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { InputTextarea } from "primereact/inputtextarea";
import Button from '@material-ui/core/Button';
import {Messages} from 'primereact/messages';
import { BlogContext } from "../App";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  purple: {
      color: '#fff',
      backgroundColor: '#605196',
      width: theme.spacing(5),
    height: theme.spacing(5),
    },
    orange: {
      color: '#fff',
      backgroundColor: 'orange',
      width: theme.spacing(6),
    height: theme.spacing(6),
    }
}));

const BlogComment = (props) => {
  const classes = useStyles();
  const[date] = useState((`${props.date}`).split(" "));
  return (
    <div className="comment">
      <div className="container">
        <div className="row">
          <div className="col-2">
          <Avatar className={classes.orange}>
          {(`${props.name}`).substring(0,1).toUpperCase()}
          </Avatar>
          </div>
          <div className="col-10">
            <div>
         <h5>{props.name}</h5>
            </div>
            <div>
              <JustDate month={`${date[1]} ${date[2]}`} year={date[3]} />
            </div>
            <div>
              <h6>
                {props.comment}
              </h6>
            </div>
          </div>

          <div className="col-12">
            <hr></hr>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BlogReply = (props) => {
  const[date] = useState((`${props.date}`).split(" "));
  const classes = useStyles();
  return (
    <div className="reply">
      {date.length > 1?
      <div className="container">
        <div className="row">
          <div className="col-2">
          <Avatar className={classes.purple}>
          {(`${props.name}`).substring(0,1).toUpperCase()}
          </Avatar>
          </div>
          <div className="col-10">
            <div>
         <h5>{props.name}</h5>
            </div>
            <div>
              <JustDate month={`${date[1]} ${date[2]} `} year={date[3]} />
            </div>
            <div>
              <h6>
                {props.reply}
              </h6>
            </div>
          </div>

          <div className="col-12">
            <hr></hr>
          </div>
        </div>
      </div>
      :
      <div/>
   }
    </div>
  );
};

export const CommentBox = (props) => {
  let messages = useRef(null);
  const blogContext = useContext(BlogContext);
  const[fullName,setFullName] = useState('');
  const[email,setEmail] = useState('');
  const[comment,setComment] = useState('');
  const uri = `${blogContext.blogState.api}/comments`;
  
  const showError = () => {
    messages.current.show({severity: 'error', summary: 'Error :', 
    detail: 'Validation Failed',sticky: true});
};

const showMultiple = () => {
  messages.current.show([
      {severity: 'error', summary: 'Validation Error :', detail: 'Validation Failed',sticky: true},
      {severity: 'info', summary: 'Form Error :', detail: 'Form not filled correctly',sticky: true},
  ]);
}

const showInfo = () => {
  messages.current.show({severity: 'info', summary: 'Successfull :',
   detail: 'Comment added successfully',sticky: true});
};

const showWarn = () => {
  messages.current.show({severity: 'warn', summary: 'Error', 
  detail: 'Something went wrong : . Please check your connection',sticky: true});
};

  async function addComment(){
    let validMail = email.match( /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if(fullName.length < 3 || comment.length < 3 || validMail === null){
      showMultiple();
    }
    else{
    const com  = {
      id:'',
      blogId:props.blogId,
      email:email,
      fullName:fullName,
       date:new Date().toDateString(),
       comment:comment,
       reply:{ }
  }
 

  await axios
  .put(uri,com)
  .then((res) => {
    let response = res.data;
    if(response){
      blogContext.blogDispatch({type:'PERFORM_TASK',task:1});
      showInfo()
    }
    else{
      showWarn()
    }
  })

  .catch((err) => {
    showWarn()
    console.log(`error ocurr ${err}`);
  });
  // ...
}
}

  

  return (
    <div className="commentbox">
      <Messages ref={messages} />
      <div className="container">
        <div className="row">
          <div className="col">
            <hr></hr>
          </div>
          <div className="col-auto">
            <h3>Leave Comment</h3>
          </div>
          <div className="col">
            <hr></hr>
          </div>

          <div className="col-12">
            <InputTextarea
              rows={7}
              value={comment}
              onChange={
                (e) => setComment(e.target.value)
                } 
              placeholder={`Add a comment`}
              autoResize={true}
              cols={30}
            />
          </div>

          <div className="col-6">
            <input placeholder="Full Name" 
            value={fullName}
            onChange={
            (e) => setFullName(e.target.value)
            } 
             />
          </div>

          <div className="col-6">
            <input value={email} onChange={
            (e) => setEmail(e.target.value)
            } placeholder="Email" />
          </div>

          <div className="col-12">
          <Button onClick={addComment} variant="contained" color="primary">
          Add Comment
          </Button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComment;
