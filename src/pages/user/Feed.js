import React from "react";
import "./Feed.css";
import { useQuery } from '@apollo/react-hooks';
import { getArticles } from '../../queries/queries';

const Feed = () => {

  const { loading, error, data } = useQuery(getArticles);

  return (
    <div>
      <h3>The Feed</h3>
      {error && <h1>error</h1>}
      {loading && <h1>Loading</h1>}
      {data && data.articles.map(article => {
        console.log(article)
        return (
          <article>
            <h1>{article.title}</h1>

          </article>);
        }
      )}
    </div>
  );
};

export default Feed;
