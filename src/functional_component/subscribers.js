import "../css/subscriber.css";
import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

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
  const classes = useStyles();
  return (
    <div className="newsletterM">
     <div className="card">

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h6>
              Subscribe to Newsletter for new blog posts, tips & new photos.
              Let's stay updated!
            </h6>
          </div>

          <div className="col-12">
            <input placeholder="Full Name" />
          </div>

          <div className="col-12">
            <input placeholder="Email" />
          </div>

          <div className="col-12">
          <Button className={classes.root} variant="contained" color="primary">
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
