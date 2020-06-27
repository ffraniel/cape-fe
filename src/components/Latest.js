import React from "react";
import { Link } from "react-router-dom";
import "./Latest.css";

const Latest = ({ article }) => {
  return (
    <article
      className={`latest-block list-article-block large-vertical-padding`}
      key={article.id}
    >
      <h3 className="h3">Latest</h3>
      <div className="container">
        <h6 className="article-list-date header-trigger">
          May 12 2020 (fake date)
        </h6>
        <Link className="latest-link" to={`/article/${article.id}`}>
          <h1 className="latest-title">{article.title}</h1>
        </Link>
        {article.author ? (
          <h3 className="latest-author">{article.author}</h3>
        ) : (
          <h3 className="latest-author">Editor</h3>
        )}
        <p className="latest-preview">
          {article.text.text.split(" ").slice(0, 45).join(" ")}...
        </p>
        <div className="latest-categories-list">
          {article.categories.map((category) => {
            return (
              <Link
                className="latest-list-category-list-item"
                key={category.title}
                to={`/category/${category.title.toLowerCase()}`}
              >
                {category.title}
              </Link>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default Latest;
