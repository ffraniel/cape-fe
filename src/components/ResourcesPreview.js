import React from "react";
import MiniFeed from "./MiniFeed";
import { getArticlesByThemeB } from "../queries/queries";
import { useQuery } from "@apollo/react-hooks";

const ResourcesPreview = () => {
  //make query for resources

  const { loading, error, data } = useQuery(getArticlesByThemeB, {
    variables: {
      category: "resources",
      first: 4,
    },
  });

  return (
    <div className="recent-article-preview">
      <h3>Resources</h3>
      {loading && <h5>Loading</h5>}
      {data && <MiniFeed articles={data.articles} category={"resources"} />}
      {error && <h5>Error</h5>}
      {error && console.log("ERROR: ", error)}
    </div>
  );
};

export default ResourcesPreview;
