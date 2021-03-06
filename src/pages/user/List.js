import React from "react";
import "./List.css";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import DateFormatter from "../../components/DateFormatter";
import MainImage from "../../components/MainImage";
import regularExp from "../../utility/regularExpression";

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
          <h3 className="no-more-results">No articles to show</h3>
        </article>
      </animated.div>
    );
  }

  return (
    <animated.div style={animationProps} className="list">
      {data.articles.map((article, i) => {
        return (
          <article
            className={`list-article-block medium-vertical-padding`}
            key={article.id}
          >
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
              {article.images && article.images.url && (
                <div className="list-image-container">
                  <Link to={`/article/${article.id}`}>
                    <MainImage
                      src={article.images.url}
                      alt={`For article "${article.title}"`}
                    />
                  </Link>
                </div>
              )}
              {article.author ? (
                <h3 className="list-author">{article.author}</h3>
              ) : (
                <h3 className="list-author">Editor</h3>
              )}
              <p className="list-preview">
                {article.text.text
                  .replace(regularExp, " ")
                  .split(" ")
                  .slice(0, 30)
                  .join(" ")}
                ...
              </p>
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
            </div>
          </article>
        );
      })}
    </animated.div>
  );
};

export default List;
