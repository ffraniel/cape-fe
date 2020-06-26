import React from "react";
import "./MiniFeed.css";
import { Link } from "react-router-dom";

const MiniFeed = ({ articles, category }) => {
  let isCategory = category !== undefined && category.length > 0;

  return (
    <div className={`mini-feed ${category ? category : ""}`}>
      <ul className="mini-feed--article-grid">
        {articles.map((article) => (
          <li className="mini-feed--grid-preview" key={article.id}>
            <Link to={`article/${article.id}`}>
              <h3>{article.title}</h3>
              <h5>{article.author ? article.author : "Editor"}</h5>
              <p>17th May 2020 (Fake date)</p>
              <div className="tiny-preview-container">
                <p className="tiny-preview">
                  {article.text.text.split(" ").slice(0, 12).join(" ")}...
                </p>
              </div>
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
