import React from "react";
import "./List.css";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import shuffle from "../../utility/shuffle";

const List = (props) => {
  const { data } = props;

  const animationProps = useSpring({
    opacity: 1,
    transform: "translate(0, 0)",
    from: { opacity: 0, transform: "translate(0, 20px)" },
    config: {
      mass: 2,
      friction: 28,
    },
  });

  if (data.articles.length === 0) {
    return (
      <animated.div style={animationProps} className="list">
        <article>
          <h3 className="header-trigger">No articles to show</h3>
        </article>
      </animated.div>
    );
  }

  const backgroundsListInitial = [
    "background-0",
    "background-1",
    "background-2",
    "background-3",
    "background-4",
    "background-0",
    "background-1",
    "background-2",
    "background-3",
    "background-4",
  ];
  const backgroundsList = shuffle(backgroundsListInitial);

  return (
    <animated.div style={animationProps} className="list">
      {data.articles.map((article, i) => {
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
      })}
    </animated.div>
  );
};

export default List;
