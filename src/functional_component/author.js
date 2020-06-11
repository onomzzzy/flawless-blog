import React from "react";
import "../css/author.css";

const Author = (props) => {
  return (
    <div className="author">
      <div>
        <span>
          <span className="name">{props.name}</span>{" "}
          <span className="divider">| </span>{" "}
          <span className="date">{props.date}</span>
        </span>
      </div>
    </div>
  );
};

export const JustDate = (props) => {
  return (
    <div className="author">
      <span>
        <span className="name">{props.month}</span>{" "}
        <span className="divider">,</span>{" "}
        <span className="date">{props.year}</span>
      </span>
    </div>
  );
};

export default Author;
