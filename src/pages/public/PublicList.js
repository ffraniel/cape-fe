import React from "react";
import { useSpring, animated } from 'react-spring';
import { animationConfig } from '../../animations';
import "./PublicList.css";
import { Link } from "react-router-dom";

const PublicList = (props) => {

  const { data } = props;
  
  const animationProps = useSpring(animationConfig);

  return (
    <animated.div className="list" style={animationProps}>
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

export default PublicList;
