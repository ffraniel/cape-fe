import React from 'react';
import './Paginator.css';
import { Link } from "react-router-dom";

const Paginator = (props) => {
  let { 
    pageNumber,
    length,
    isCategory,
    category
  } = props;

  /* {pages.map((page, i) => (
    <Link className={page === pageNumber ? 'pagination-link pagination-link--active' : 'pagination-link'} key={i + '-' + page} to={`/articles/${i}`}>{i}</Link>
  ))} */

  if (isCategory) {
    return (
      <div className="paginator">
        {pageNumber >= 1 && <Link className="pagination-btn" to={`/category/${category}/${pageNumber - 1}`}>Last</Link>}
        {pageNumber === 0 && <button className="pagination-btn" disabled>Last</button>}
        <h4>{pageNumber}</h4>
        {length > 0 && <Link className="pagination-btn" to={`/category/${category}/${pageNumber + 1}`}>Next</Link>}
        {length === 0 &&  <button className="pagination-btn" disabled>Next</button>}
      </div>
    );
  } else {
    return (
      <div className="paginator">
        {pageNumber >= 1 && <Link className="pagination-btn" to={`/articles/${pageNumber - 1}`}>Last</Link>}
        {pageNumber === 0 && <button className="pagination-btn" disabled>Last</button>}
        <h4>{pageNumber}</h4>
        {length > 0 && <Link className="pagination-btn" to={`/articles/${pageNumber + 1}`}>Next</Link>}
        {length === 0 &&  <button className="pagination-btn" disabled>Next</button>}
      </div>
    );
  }

};

export default Paginator;