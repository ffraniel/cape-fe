import React from 'react';
import './Conferences.css';
import { useQuery } from '@apollo/react-hooks';
import { getConference } from '../../queries/queries';
import { useSpring, animated } from 'react-spring';
import { animationConfig } from '../../animations';
import PublicList from './PublicList';
import Loading from '../../components/Loading';

const Conferences = () => {

  const { loading, error, data } = useQuery(getConference, {
    variables: {
      membersOnly: false
    }
  });

  const animationProps = useSpring(animationConfig);

  return (
    <div className="container conferences page">
      <h1 className="header-trigger">Conferences and Events</h1>
      {loading && <Loading />}
      {error && <h1>ERROR{console.log("error: ", error)}</h1>}
      {data && data.articles.length === 0 && 
        <animated.div style={animationProps}>
          <h3>Currently there are no public events upcoming. Members please sign in to see if there are any members-only events.</h3>
        </animated.div>
      }
      {data && <PublicList data={data} />}
    </div>
  );
};

export default Conferences;