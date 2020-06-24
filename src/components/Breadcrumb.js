import React from "react";
import "./Breadcrumb.css";
import { useHistory } from "react-router-dom";

const Breadcrumb = ({ url }) => {
  let history = useHistory();

  // let location = history.location.pathname;
  // if (location.includes('category')) {
  //   // if (location.split("/")[2])
  //   console.log("category: ", location.split("/"));
  //   setLocationString('Back to Category');
  // } else if (location.includes('articles')) {
  //   console.log("articles: ", location.split("/"));
  //   setLocationString('Back to Articles');
  // }

  const goBack = (e) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <div className="breadcrumb">
      <a href="#back" onClick={goBack}>
        Back to Articles List
      </a>
    </div>
  );
};

export default Breadcrumb;
