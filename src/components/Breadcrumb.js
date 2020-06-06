import React, { useState } from "react";
import "./Breadcrumb.css";
import { 
  Link,
  useHistory
} from 'react-router-dom';


const Breadcrumb = ({url}) => {

  const [locationString, setLocationString] = useState('Back to Articles');

  let history = useHistory();

  let location = history.location.pathname;
  console.log("location", location)
  
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
  }

  return (
    <div className="breadcrumb">
      <a href="#back" onClick={goBack}>{locationString}</a>
    </div>
  );

};

export default Breadcrumb;
