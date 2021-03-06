import React from "react";
import { Link } from "react-router-dom";
import "./Latest.css";
import DateFormatter from "../components/DateFormatter";
import MainImage from "../components/MainImage";
import regularExp from "../utility/regularExpression";

const Latest = ({ article }) => {
  return (
    <article
      className={`latest-block list-article-block large-vertical-padding`}
      key={article.id}
    >
      <h3 className="h3">Latest</h3>
      <div className="container">
        <h6 className="article-list-date header-trigger">
          <DateFormatter date={article.createdAt} />
        </h6>
        {article.updatedAt !== article.createdAt && (
          <h6 className="article-item-date-updated">Updated</h6>
        )}
        <Link className="latest-link" to={`/article/${article.id}`}>
          <h1 className="latest-title">{article.title}</h1>
        </Link>
        {article.images && article.images.url && (
          <div className="latest-image-container">
            <Link to={`/article/${article.id}`}>
              <MainImage
                src={article.images.url}
                alt={`For article "${article.title}"`}
              />
            </Link>
          </div>
        )}
        {article.author ? (
          <h3 className="latest-author">{article.author}</h3>
        ) : (
          <h3 className="latest-author">Editor</h3>
        )}
        <p className="latest-preview">
          {article.text.text
            .replace(regularExp, " ")
            .split(" ")
            .slice(0, 45)
            .join(" ")}
          ...
        </p>
        <Link
          className="btn secondary-btn latest--read-more"
          to={`/article/${article.id}`}
        >
          Read
        </Link>
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
