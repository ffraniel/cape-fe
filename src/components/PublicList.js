import React from "react";
import "./PublicList.css";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import DateFormatter from "./DateFormatter";
import MainImage from "./MainImage";
import regularExp from "../utility/regularExpression";

const PublicList = (props) => {
  const { data } = props;
  const publicArticlesOnly = data.articles.filter(article =>  !article.membersOnly === true);

  const animationProps = useSpring({
    opacity: 1,
    transform: "translate(0, 0)",
    from: { opacity: 0, transform: "translate(0, 20px)" },
    config: {
      mass: 2,
      friction: 28,
    },
  });

  if (publicArticlesOnly === 0) {
    return (
      <animated.div style={animationProps} className="list">
        <article>
          <h3 className="no-more-results">No articles to show</h3>
        </article>
      </animated.div>
    );
  }

  return (
    <animated.div style={animationProps} className="public-list">
      {publicArticlesOnly.map((article, i) => {
        return (
          <article
            className={`list-article-block public-list--article`}
            key={article.id}
          >
            <div className="container">
              {article.updatedAt !== article.createdAt && (
                <h6 className="article-item-date-updated">Updated</h6>
              )}
              <h6 className="article-list-date header-trigger">
                <DateFormatter date={article.updatedAt} />
              </h6>
              <Link className="list-title-link" to={`/events/${article.id}`}>
                <h2 className="list-title">{article.title}</h2>
              </Link>
              {article.images && article.images.url && (
                <div className="list-image-container">
                  <Link to={`/events/${article.id}`}>
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
              <Link className="list--read-link" to={`/events/${article.id}`}>
                Read More
              </Link>
            </div>
          </article>
        );
      })}
    </animated.div>
  );
};

export default PublicList;
