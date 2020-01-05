import React from 'react';
import './Paginator.css';
import { Link } from "react-router-dom";

const Paginator = (props) => {
  let { 
    pageNumber
  } = props;

  return (
    <div className="paginator">
      {/* {pages.map((page, i) => (
        <Link className={page === pageNumber ? 'pagination-link pagination-link--active' : 'pagination-link'} key={i + '-' + page} to={`/articles/${i}`}>{i}</Link>
      ))} */}
      {pageNumber >= 1 &&
        <Link to={`/articles/${pageNumber - 1}`}>Last</Link>    
      }
      {pageNumber === 0 &&
        <button disabled>Last</button>    
      }
      <h4>{pageNumber}</h4>
      <Link to={`/articles/${pageNumber + 1}`}>Next</Link>

    </div>
  );
};

export default Paginator;