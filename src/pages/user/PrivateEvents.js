import React from "react";
import "./PrivateEvents.css";
import { useQuery } from "@apollo/react-hooks";
import { getEvents } from "../../queries/queries";
import { useSpring, animated } from "react-spring";
import { animationConfig } from "../../animations";
import EventsList from "../../components/EventsList";
import Loading from "../../components/Loading";
import SubjectHeading from "../../components/SubjectHeading";

const PrivateEvents = () => {
  const { loading, error, data } = useQuery(getEvents, {
    variables: {
      membersOnly: false,
    },
  });

  const animationProps = useSpring(animationConfig);

  return (
    <div className="conferences page private-events">
      <SubjectHeading categoryText={"Conferences and Events"} />
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
      {data && <EventsList data={data} isPrivate={true} />}
    </div>
  );
};

export default PrivateEvents;
