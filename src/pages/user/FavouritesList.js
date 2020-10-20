import React from "react";
import "./FavouritesList.css";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import DateFormatter from "../../components/DateFormatter";

const FavouritesList = (props) => {
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

  return (
    <animated.div style={animationProps} className="favourites-list">
      {data.articles &&
        data.articles.map((article) => {
          return (
            <article className="favourites-article" key={article.id}>
              <div className="container">
                <h6 className="article-list-date header-trigger">
                  <DateFormatter date={article.updatedAt} />
                </h6>
                {article.updatedAt !== article.createdAt && (
                  <h6 className="article-item-date-updated">Updated</h6>
                )}
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
                  {article.text.text.split(" ").slice(0, 15).join(" ")}...
                </p>
              </div>
            </article>
          );
        })}
    </animated.div>
  );
};

export default FavouritesList;
