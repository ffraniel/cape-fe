import React from "react";
import "./List.css";
import { Link } from "react-router-dom";
import {useSpring, animated} from 'react-spring';

const List = (props) => {
  const { data } = props;

  const animationProps = useSpring({
    opacity: 1, 
    transform: 'translate(0, 0)',
    from: {opacity: 0, transform: 'translate(0, 20px)'},
    config: {
      mass: 2,
      friction: 28
    }
  });

  if (data.articles.length === 0) {
    return (
      <animated.div style={animationProps} className="list">
        <article >
          <h3 className="header-trigger">No articles to show</h3>
        </article>
      </animated.div>
    );
  }

  return (
    <animated.div style={animationProps} className="list">
      {data.articles.map(article => {
        return (
          <article className="list-article-block" key={article.id}>
            <Link className="list-title-link header-trigger" to={`/article/${article.id}`}>
              <h1 className="list-title">{article.title}</h1>
            </Link>
            {article.author ? <h3 className="list-author">{article.author}</h3> : <h3 className="list-author">Editor</h3>}
            <p className="list-preview">{article.text.text.split(" ").slice(0, 30).join(" ")}...</p>
            <div className="list-categories-list">
              {console.log("Article categories: ", console.log(article))}
              {article.categories.map(category => {
                return <Link className="list-category-list-item" key={category.title} to={`/category/${category.title.toLowerCase()}`}>{category.title}</Link>;
              })}
            </div>
          </article>
        )})}
    </animated.div>
  );
};

export default List;
