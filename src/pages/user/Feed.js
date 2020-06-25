import React, { useState, useEffect } from "react";
import "./Feed.css";
import { useQuery } from "@apollo/react-hooks";
import { getArticlesPreviewB } from "../../queries/queries";
import List from "./List";
import SubjectHeading from "../../components/SubjectHeading";
import Loading from "../../components/Loading";

const Feed = () => {
  const [lastEntry, setLastEntry] = useState("");
  const [noMoreArticles, setNoMoreArticles] = useState(false);
  const skipValue = 2;

  const { loading, error, data, fetchMore } = useQuery(getArticlesPreviewB, {
    variables: {
      category: "News",
      first: skipValue,
    },
  });

  useEffect(() => {
    if (data && data.articles.length) {
      setLastEntry(data.articles.slice(-1)[0].id);

      if (data.articles.length % skipValue !== 0) {
        setNoMoreArticles(true);
      }
    }
  }, [data]);

  const loadMoreArticles = () => {
    fetchMore({
      query: getArticlesPreviewB,
      variables: {
        category: "News",
        first: skipValue,
        after: lastEntry,
      },

      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }
        if (
          fetchMoreResult.articles.length < 2 ||
          fetchMoreResult.articles.length === 0
        ) {
          setNoMoreArticles(true);
        }
        return Object.assign({}, prev, {
          articles: [...prev.articles, ...fetchMoreResult.articles],
        });
      },
    });
    setLastEntry(data.articles.slice(-1)[0].id);
  };

  let categoryText = "News";

  return (
    <div className="feed">
      <SubjectHeading categoryText={categoryText} />
      {error && <h3>ERROR{console.log("error: ", JSON.stringify(error))}</h3>}
      {loading && <Loading />}
      {data && <List data={data} />}
      {data && console.log(lastEntry)}
      {data && !noMoreArticles && (
        <button onClick={loadMoreArticles}>GET MORE </button>
      )}
      {data && noMoreArticles && (
        <div className="no-more-results">
          <h3>No more results</h3>
        </div>
      )}
    </div>
  );
};

export default Feed;
