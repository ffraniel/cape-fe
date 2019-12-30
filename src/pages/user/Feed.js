import React from "react";
import "./Feed.css";
import { useQuery } from '@apollo/react-hooks';
import { 
  getArticlesPreview
} from '../../queries/queries';
import List from './List';

const Feed = () => {

  const { loading, error, data } = useQuery(getArticlesPreview, {
    variables: {
      category: "News"
    }
  });

  return (
    <div className="container">
      <h2>The Feed</h2>
      {error && console.log(error) }
      {loading && <h1>Loading</h1>}
      {data && <List data={data} />}
    </div>
  );
};

export default Feed;
