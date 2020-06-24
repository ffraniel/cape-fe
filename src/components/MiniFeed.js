import React from "react";
import "./MiniFeed.css";
import { Link } from "react-router-dom";

const MiniFeed = ({ articles, category }) => {
  let isCategory = category !== undefined && category.length > 0;

  return (
    <div className={`mini-feed ${category ? category : ""}`}>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`article/${article.id}`}>
              <h3>{article.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
      {isCategory && (
        <Link to={`/category/${category}`}>
          See more in {category[0].toUpperCase().concat(category.slice(1))}
        </Link>
      )}
      {!isCategory && <Link to={`/articles`}>See More Articles</Link>}
    </div>
  );
};

export default MiniFeed;
