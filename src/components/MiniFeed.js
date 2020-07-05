import React from "react";
import "./MiniFeed.css";
import { Link } from "react-router-dom";
import DateFormatter from "../components/DateFormatter";

const MiniFeed = ({ articles, category }) => {
  let isCategory = category !== undefined && category.length > 0;

  return (
    <div className={`mini-feed ${category ? category : ""}`}>
      <ul className="mini-feed--article-grid">
        {articles.map((article) => (
          <li className="mini-feed--grid-preview" key={article.id}>
            <Link to={`article/${article.id}`}>
              <h3 className="mini-feed--grid-preview--title">
                {article.title}
              </h3>
            </Link>
            <h5 className="mini-feed--grid-preview--author">
              {article.author ? article.author : "Editor"}
            </h5>
            <p className="mini-feed--grid-preview--date">
              <DateFormatter date={article.updatedAt} />
            </p>
            {article.updatedAt !== article.createdAt && (
              <p className="article-item-date-updated">Updated</p>
            )}
            <div className="tiny-preview-container">
              <p className="tiny-preview">
                {article.text.text.split(" ").slice(0, 12).join(" ")}...
              </p>
            </div>
          </li>
        ))}
      </ul>
      {isCategory && (
        <Link
          className="minifeed-article-list-link"
          to={`/category/${category}`}
        >
          See more in {category[0].toUpperCase().concat(category.slice(1))}
        </Link>
      )}
      {!isCategory && (
        <Link className="minifeed-article-list-link" to={`/articles`}>
          See More Articles
        </Link>
      )}
    </div>
  );
};

export default MiniFeed;
