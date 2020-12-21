import React from "react";
import "./Event.css";
import { useQuery } from "@apollo/react-hooks";
import { Link, useParams } from "react-router-dom";
import { getEvent } from "../queries/queries";
import { useSpring, animated } from "react-spring";
import Loading from "./Loading";
import DateFormatter from "./DateFormatter";
import MainImage from "./MainImage";

const Event = () => {
  const { conferenceID } = useParams();

  const animationProps = useSpring({
    opacity: 1,
    transform: "translate(0, 0)",
    from: { opacity: 0, transform: "translate(0, 20px)" },
    config: {
      mass: 2,
      friction: 28,
    },
  });

  const { loading, error, data } = useQuery(getEvent, {
    variables: {
      id: conferenceID,
    },
  });

  if (data && data.events && data.events.length === 0) {
    return (
      <animated.div style={animationProps} className="category">
        <article className="container full-height-page">
          <h3>No Event found. Something has gone wrong.</h3>
        </article>
      </animated.div>
    );
  }

  return (
    <animated.div style={animationProps}>
      {loading && <Loading />}
      {error && <h1>ERROR{console.log("error: ", error)}</h1>}
      {data && (
        <article className="event-item public-conference">
          <div className="conference-back-btn--container">
            <Link className="conference-back-btn" to="/conferences">
              Back to Conferences
            </Link>
          </div>
          <div className="">
            <div className="container">
              <h6 className="event-post-date">
                <DateFormatter date={data.event.updatedAt} />
              </h6>
              {data.event.updatedAt !== data.event.createdAt && (
                <h6 className="event-post-date event-post-date--updated">
                  Updated
                </h6>
              )}
              <h1 className="header-trigger event-title">{data.event.title}</h1>
              <h4 className="event-date">{data.event.date}</h4>
            </div>
          </div>
          <div className="article-body">
            <div className="container">
              {data.event.images && data.event.images[0] && (
                <MainImage
                  alt={data.event.title}
                  src={data.event.images[0].url}
                />
              )}
              <div
                className="article-html"
                dangerouslySetInnerHTML={{ __html: data.event.text.html }}
              ></div>
            </div>
          </div>
        </article>
      )}
    </animated.div>
  );
};

export default Event;
