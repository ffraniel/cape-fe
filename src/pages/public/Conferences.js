import React from 'react';
import './Conferences.css';
import { useQuery } from '@apollo/react-hooks';
import { getConference } from '../../queries/queries';
import PublicList from './PublicList';
import Loading from '../../components/Loading';

const Conferences = () => {

  const { loading, error, data } = useQuery(getConference, {
    variables: {
      membersOnly: false
    }
  });

  return (
    <div className="container conferences">
      <h1>Conferences and Events</h1>
      {loading && <Loading />}
      {error && <h1>ERROR{console.log("error: ", error)}</h1>}
      {data && data.articles.length === 0 && <h3>Currently there are no upcoming events.</h3>}
      {data && <PublicList data={data} />}
    </div>
  );
};

export default Conferences;