import React from "react";
import "./List.css";
import { Link } from "react-router-dom";

const List = (props) => {
  const { data } = props;
  return (
    <div className="list">
      {data.articles.map(article => {
        return (
          <article key={article.id}>
            <Link to={`/article/${article.id}`}>
              <h1>{article.title}</h1>
            </Link>
            <p>{article.text.text.split(" ").slice(0, 30).join(" ")}...</p>
            <div className="categories-list">
              {article.category.map(category => {
                return <Link key={category.title} to={`/category/${category.title.toLowerCase()}`}>{category.title}</Link>;
              })}
            </div>
          </article>
        )})}
    </div>
  );
};

export default List;
