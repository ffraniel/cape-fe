import React, { useEffect, useState } from "react";
import "./Category.css";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import { getArticlesByThemeB } from "../../queries/queries";
import List from "./List";
import SubjectHeading from "../../components/SubjectHeading";
import Loading from "../../components/Loading";

const Category = () => {
  const { category } = useParams();
  const [lastEntry, setLastEntry] = useState("");
  const [noMoreArticles, setNoMoreArticles] = useState(false);

  const skipValue = 2;
  const { loading, error, data, fetchMore } = useQuery(getArticlesByThemeB, {
    variables: {
      category: category,
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
      query: getArticlesByThemeB,
      variables: {
        category: category,
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

  let categoryText = category[0].toUpperCase().concat(category.slice(1));

  return (
    <div className="category">
      <SubjectHeading categoryText={categoryText} />
      {loading && <Loading />}
      {error && <h3>ERROR{console.log("error: ", error)}</h3>}
      {data && <List data={data} />}
      {data && !noMoreArticles && data.articles.length > 0 && (
        <button onClick={loadMoreArticles}>GET MORE </button>
      )}
      {data && noMoreArticles && (
        <div className="no-more-results">
          <h3>No more results in {categoryText}</h3>
        </div>
      )}
    </div>
  );
};

export default Category;
