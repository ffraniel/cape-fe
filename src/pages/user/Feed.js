import React, { useState, useEffect } from "react";
import "./Feed.css";
import { useQuery } from '@apollo/react-hooks';
import { useParams } from "react-router-dom";
import { 
  getArticlesPreview
} from '../../queries/queries';
import List from './List';
import Paginator from '../../components/Paginator';

const Feed = () => {
  const { pagination } = useParams();
  const [pageNumber, setPageNumber] = useState(pagination === undefined ? 0 : pagination);
  
  const skipValue = 2;

  const { loading, error, data, fetchMore } = useQuery(getArticlesPreview, {
    variables: {
      category: "News",
      first: skipValue,
      skip: 0
    }
  });
  
  useEffect(() => {
    setPageNumber(pagination === undefined ? 0 : pagination);
    fetchMore({
      variables: {
        category: "News",
        first: skipValue,
        skip: skipValue * Number(pagination === undefined ? 0 : pagination)
      }, 
      updateQuery: (previousResult, {fetchMoreResult}) => {
        if (!fetchMoreResult) { 
          return previousResult;
        }
        // return Object.assign({}, previousResult, {
        //   articles: [...previousResult.articles, ...fetchMoreResult.articles],
        // });
        return fetchMoreResult;
      }
    });
  }, [pagination, fetchMore, pageNumber]);


  return (
    <div className="container">
      <h2>The Feed</h2>
      {error && console.log(error) }
      {loading && <h1>Loading</h1>}
      {data && <List data={data} />}
      <Paginator pageNumber={Number(pageNumber)} />
    </div>
  );
};

export default Feed;
