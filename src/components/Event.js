import React from "react";
import "./Event.css";
import { useQuery } from "@apollo/react-hooks";
import { Link, useParams } from "react-router-dom";
import { getArticle } from "../queries/queries";
import { useSpring, animated } from "react-spring";
import Loading from "./Loading";
import DateFormatter from "./DateFormatter";
import MainImage from "./MainImage";

const Event = () => {
  const { articleID } = useParams();

  const animationProps = useSpring({
    opacity: 1,
    transform: "translate(0, 0)",
    from: { opacity: 0, transform: "translate(0, 20px)" },
    config: {
      mass: 2,
      friction: 28,
    },
  });

  const { loading, error, data } = useQuery(getArticle, {
    variables: {
      id: articleID,
    },
  });

  if (data && data.article && data.article.membersOnly) {
    
    return (
      <div className="container">
        <article className="event-item public-conference">
          <h1>Please sign in to read this article.</h1>
          <p>This is a members only article or event you are trying to view and you need to be logged in to see it.</p>
          <p>If you wish to become a member please complete the joining form</p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd2KOJPuJRgdnaIZmo85tX7M4NXcHLCrNJTdjQZ88AXRbCliw/viewform?usp=sf_link"
            target="_blank"
            className="google-form-link"
            rel="noopener noreferrer"
          >
            Go to Join form
          </a>
        </article>
      </div>
    )
  }
  // if (data) {
  //   return (
  //     <animated.div style={animationProps} className="category">
  //       <article className="container full-height-page">
  //         <h3>No Event found. Something has gone wrong.</h3>
  //       </article>
  //     </animated.div>
  //   );
  // }

  return (
    <animated.div style={animationProps}>
      {loading && <Loading />}
      {error && <h1>ERROR{console.log("error: ", error)}</h1>}
      {data && (
        <article className="event-item public-conference">
          <div className="conference-back-btn--container">
            <Link className="conference-back-btn" to="/events">
              Back to Events
            </Link>
          </div>
          <div className="">
            <div className="container">
              <h6 className="event-post-date">
                <DateFormatter date={data.article.updatedAt} />
              </h6>
              {data.article.updatedAt !== data.article.createdAt && (
                <h6 className="event-post-date event-post-date--updated">
                  Updated
                </h6>
              )}
              <h1 className="header-trigger event-title">{data.article.title}</h1>
              <h4 className="event-date">{data.article.date}</h4>
            </div>
          </div>
          <div className="article-body">
            <div className="container">
              {data.article.images && data.article.images.url && (
                <MainImage
                  alt={data.article.title}
                  src={data.article.images.url}
                />
              )}
              <div
                className="article-html"
                dangerouslySetInnerHTML={{ __html: data.article.text.html }}
              ></div>
            </div>
          </div>
        </article>
      )}
    </animated.div>
  );
};

export default Event;
