import React from "react";
import "./Events.css";
import { useQuery } from "@apollo/react-hooks";
import { getEvents, getArticlesByThemeB, getPublicEvents } from "../../queries/queries";
import { useSpring, animated } from "react-spring";
import { animationConfig } from "../../animations";
// import EventsList from "../../components/EventsList";
import PublicList from "../../components/PublicList";
import Loading from "../../components/Loading";

const Events = () => {
  const { loading, error, data } = useQuery(getPublicEvents, {
    variables: {
      category: "Events",
      first: 5,
      membersOnly: false,
    },
  });

  const animationProps = useSpring(animationConfig);

  return (
    <div className="conferences conferences-public page small-vertical-padding">
      <div className="">
        <animated.h3
          style={animationProps}
          className="header-trigger conferences-page-title"
        >
          Events
        </animated.h3>
        {loading && <Loading />}
        {error && <h1>ERROR{console.log("error: ", error)}</h1>}
        {data && data.articles.length === 0 && (
          <animated.div style={animationProps}>
            <h3>
              Currently there are no public events upcoming. Members please sign
              in to see if there are any members-only events.
            </h3>
          </animated.div>
        )}
        {data && <PublicList data={data} />}
      </div>
    </div>
  );
};

export default Events;
