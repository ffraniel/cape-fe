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
      <div className="list">
          <article >
            <h1>NO ARTICLE</h1>
            <p>No articles alas</p>
          </article>
      </div>
    );
  }

  return (
    <animated.div style={animationProps} className="list">
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
    </animated.div>
  );
};

export default List;
