import React from "react";
import "./Conferences.css";
import { useQuery } from "@apollo/react-hooks";
import { getEvents } from "../../queries/queries";
import { useSpring, animated } from "react-spring";
import { animationConfig } from "../../animations";
import EventsList from "../../components/EventsList";
import Loading from "../../components/Loading";

const Conferences = () => {
  const { loading, error, data } = useQuery(getEvents, {
    variables: {
      membersOnly: false,
    },
  });

  const animationProps = useSpring(animationConfig);

  return (
    <div className="conferences conferences-public page medium-vertical-padding">
      <div className="">
        <animated.h3
          style={animationProps}
          className="header-trigger conferences-page-title"
        >
          Conferences and Events
        </animated.h3>
        {loading && <Loading />}
        {error && <h1>ERROR{console.log("error: ", error)}</h1>}
        {data && data.events.length === 0 && (
          <animated.div style={animationProps}>
            <h3>
              Currently there are no public events upcoming. Members please sign
              in to see if there are any members-only events.
            </h3>
          </animated.div>
        )}
        {data && <EventsList data={data} isPrivate={false} />}
      </div>
    </div>
  );
};

export default Conferences;
