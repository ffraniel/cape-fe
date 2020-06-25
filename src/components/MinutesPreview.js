import React from "react";
import MiniFeed from "./MiniFeed";
import { getArticlesByThemeB } from "../queries/queries";
import { useQuery } from "@apollo/react-hooks";

const MinutesPreview = () => {
  //make query for guidance
  const { loading, error, data } = useQuery(getArticlesByThemeB, {
    variables: {
      category: "minutes",
      first: 4,
    },
  });

  // if (data && data.articles.length === 0) {
  //   return [];
  // }

  return (
    <div className="recent-article-preview">
      <h3>Minutes</h3>
      {loading && <h5>Loading</h5>}
      {data && <MiniFeed articles={data.articles} category={"minutes"} />}
      {error && <h5>Error</h5>}
      {error && console.log("ERROR: ", error)}
    </div>
  );
};

export default MinutesPreview;
