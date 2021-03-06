import React from "react";
import "./FavouritesList.css";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
// import DateFormatter from "../../components/DateFormatter";
import regularExp from "../../utility/regularExpression";

const FavouritesList = (props) => {
  const { articles, removeFavourite } = props;

  const animationProps = useSpring({
    opacity: 1,
    transform: "translate(0, 0)",
    from: { opacity: 0, transform: "translate(0, 20px)" },
    config: {
      mass: 2,
      friction: 28,
    },
  });

  const handleRemove = (id) => {
    document.getElementById(id).classList.add("fade-out");
    setTimeout(() => {
      removeFavourite(id);
    }, 1000);
  };

  return (
    <animated.div style={animationProps} className="favourites-list">
      {articles &&
        articles.map((article) => {
          return (
            <article
              className="favourites-article"
              key={article.id}
              id={article.id}
            >
              <div className="article-container">
                <Link
                  className="favourites-title-link"
                  to={`/article/${article.id}`}
                >
                  <h1 className="favourites-title">{article.title}</h1>
                </Link>
                {article.author ? (
                  <h3 className="favourites-author">{article.author}</h3>
                ) : (
                  <h3 className="favourites-author">Editor</h3>
                )}
                <p className="favourites-preview">
                  {article.text.text
                    .replace(regularExp, " ")
                    .split(" ")
                    .slice(0, 15)
                    .join(" ")}
                  ...
                </p>
                <button
                  className="favourites-delete-button"
                  onClick={() => {
                    handleRemove(article.id);
                  }}
                >
                  x
                </button>
                <div className="favourites-category-list">
                  {article.categories.map((category) => (
                    <p
                      className="favourites-category-list-item"
                      key={article.id + category.title}
                    >
                      {category.title}
                      <span>|</span>
                    </p>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
    </animated.div>
  );
};

export default FavouritesList;
