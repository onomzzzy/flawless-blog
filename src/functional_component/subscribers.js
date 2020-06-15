import "../css/subscriber.css";
import React,{useState,useContext,useRef} from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {Messages} from 'primereact/messages';
import {BlogContext} from "../App";

// We can inject some CSS into the DOM.

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 30,
    padding: '0 30px',
    outline:'none!important',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  }
}));

const NewsLetter = () => {
  return (
    <div className="news-letter">
      <div className="card">
        <div className="container">
          <div className="row">
            <div className="col">
              <h6>Subscribe to News letter</h6>
            </div>
            <div className="col">
              <div>
                <input placeholder="Full Name ..." />
              </div>
            </div>

            <div className="col">
              <input placeholder="Email ..." />
            </div>
            <div className="col-2">
              <button className="btn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const NewsLetterM = () => {
  const blogContext = useContext(BlogContext);
  let messages = useRef(null);
  const uri = `${blogContext.blogState.api}/subscribers`;
  const classes = useStyles();
  const[fullName,setFullName] = useState('');
  const[email,setEmail] = useState('');

  const showError = () => {
    messages.current.show({severity: 'error', summary: 'Error :', 
    detail: 'Validation Failed',sticky: true});
};

const showInfo = () => {
  messages.current.show({severity: 'info', summary: 'Successfull :',
   detail: 'You have Subscribed successfully',sticky: true});
};

const showMultiple = () => {
  messages.current.show([
      {severity: 'error', summary: 'Validation Error :', detail: 'Validation Failed',sticky: true},
      {severity: 'info', summary: 'Form Error :', detail: 'Form not filled correctly',sticky: true},
  ]);
}

const showWarn = () => {
  messages.current.show({severity: 'warn', summary: 'Error', 
  detail: 'You have already subscribed',sticky: true});
};

  async function addSubscriber() {

    let validMail = email.match( /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if(fullName.length < 3 || validMail === null){
      showMultiple();
    }
    else{

    const suby ={
      id:'',
      blogName:'flawlessheart',
      fullName: fullName,
      email: email
    }
    await axios
   .put(uri,suby)
   .then((res) => {
     let subs =  res.data;
     if(subs){
      showInfo()
     }
     else{
      showWarn()
     }
   })

   .catch((err) => {
    showError()
     console.log(`error ocurr ${err}`);
   });
  }

 }
  return (
    <div className="newsletterM">
     <div className="card">
     <Messages ref={messages} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h6>
              Subscribe to Newsletter for new blog posts, tips & new photos.
              Let's stay updated!
            </h6>
          </div>

          <div className="col-12">
            <input value={fullName} onChange={e=> setFullName(e.target.value)} placeholder="Full Name" />
          </div>

          <div className="col-12">
            <input value={email} onChange={e=> setEmail(e.target.value)} placeholder="Email" />
          </div>

          <div className="col-12">
          <Button className={classes.root} onClick={e => addSubscriber()} variant="contained" color="primary">
           Subscribe
          </Button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default NewsLetter;
