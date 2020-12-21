import React from "react";
import { useSpring, animated } from "react-spring";
import { animationConfig } from "../animations";
import "./EventsList.css";
import { Link } from "react-router-dom";
import regularExp from "../utility/regularExpression";

const EventsList = (props) => {
  const { data, isPrivate } = props;

  const animationProps = useSpring(animationConfig);

  return (
    <animated.div className="list event-list container" style={animationProps}>
      {data.events.map((event) => {
        return (
          <article key={event.id}>
            <Link to={`${isPrivate ? "/events/" : "/conferences/"}${event.id}`}>
              <h1 classname="event-title--list">{event.title}</h1>
            </Link>
            {isPrivate && <span className="members-only">Members Only</span>}
            <h5>{event.date}</h5>
            <p>
              {event.text.text
                .replace(regularExp, " ")
                .split(" ")
                .slice(0, 30)
                .join(" ")}
              ...
            </p>
          </article>
        );
      })}
    </animated.div>
  );
};

export default EventsList;
