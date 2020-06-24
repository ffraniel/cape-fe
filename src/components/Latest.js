import React from "react";
import { Link } from "react-router-dom";
import "./Latest.css";

const Latest = ({ article }) => {
  return (
    <article
      className={`list-article-block medium-vertical-padding`}
      key={article.id}
    >
      <div className="container">
        <h6 className="article-list-date header-trigger">May 12 2020</h6>
        <Link className="list-title-link" to={`/article/${article.id}`}>
          <h1 className="list-title">{article.title}</h1>
        </Link>
        {article.author ? (
          <h3 className="list-author">{article.author}</h3>
        ) : (
          <h3 className="list-author">Editor</h3>
        )}
        <div className="list-categories-list">
          {article.categories.map((category) => {
            return (
              <Link
                className="list-category-list-item"
                key={category.title}
                to={`/category/${category.title.toLowerCase()}`}
              >
                {category.title}
              </Link>
            );
          })}
        </div>
        <p className="list-preview">
          {article.text.text.split(" ").slice(0, 30).join(" ")}...
        </p>
      </div>
    </article>
  );
};

export default Latest;
